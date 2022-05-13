import { useEffect, useState } from "react";
import NavBar from "../../components/Seller/NavBar";
import { useAuth } from "../../src/contexts/AuthContext";
import { database } from "../../src/utils/init-firebase";
import {
  collection,
  query,
  where,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";
// function getDate(date) {

// return newDate.toISOString();
// }

const Tour = () => {
  const { ReadCustomerorderforSeller, currentUser, currentSeller } = useAuth();
  const [fireData, setFireData] = useState([]);
  const [isLoading, setisLoding] = useState(true);
  const articles = [];

  useEffect(() => {
    // getData();
  }, []);
  const getData = async () => {
    // console.log(currentSeller.user.uid);
    const citiesRef = collection(database, "CustomerOrder");
    const q = query(citiesRef, where("Seller", "==", currentSeller.user.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      articles.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    setFireData(
      articles.map((datas) => {
        return { ...datas, id: datas.id };
      })
    );
    setisLoding(false);
    // console.log("hello");

    console.log(fireData[0]);

    // alert("Inside");
    // const Data = ReadCustomerorderforSeller()
    //   .then((response) => {
    //     // console.table(response[0])
    //     // console.table(response);
    //     // return response;
    //     setFireData(
    //       response.map((data) => {
    //         return { ...data, id: data.id };
    //       })
    //     );
    //     setisLoding(false);
    //   })

    //   .catch((error) => console.log(error.message));
  };

  // const date = fireData[0];

  // newDate = date.getFullYear();
  // console.log(date);
  // console.log(fireData[0].Date);

  // console.table(fireData[0]);
  // console.log(fireData)

  // console.table(Data.value);
  // console.table(fireData);
  if (isLoading) {
    return (
      <div>
        <NavBar />

        <button
          onClick={getData}
          className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          {/* {currentUser.email} */}
          Click To preview
        </button>
        {/* <h1 className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          >Loading...
        </h1> */}
      </div>
    );
  }
  return (
    <>
      <NavBar />

      {/* <NavBar /> */}
      {/* <h1 className="text-center sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
        {currentUser && `the user :${currentUser.email}`}
      </h1> */}

      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
                {currentUser && `Order History`}
                {!currentUser && `Login To Enjoy our services`}
              </h1>
            </div>
            <div className="w-full bg-white px-10 py-10">
              <div className="-m-4">
                <div className="p-4 ">
                  <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col relative overflow-hidden">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="mt-8">
                        <div className="flow-root">
                          {currentUser && (
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {fireData.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  {/* <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"> */}
                                  <div className="md:h-28 md:w-28 h-16 w-16 rounded-md border border-gray-200">
                                    {/* {product.Time} */}
                                    <img
                                      src={product.ImageUrl}
                                      // alt={product.imageAlt}
                                      className="h-full w-full object-contain object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a
                                          // href={product.href}
                                          >
                                            {" "}
                                            {product.name}{" "}
                                          </a>
                                        </h3>

                                        <div>
                                          Booked date
                                          <h1 className="text-sm text-gray-500">
                                            {product.Date} {product.Time}
                                          </h1>
                                        </div>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.Cabname}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        ₹ {product.Price}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      {/* <p className="text-gray-500">
                                        From {product.destination} To{" "}
                                        {product.destination2}
                                      </p> */}

                                      <div className="flex">
                                        {/* <button className="flex text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base">
                                          View Details{product.orderId}
                                        </button> */}
                                        {product.orderId}
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Tour;
