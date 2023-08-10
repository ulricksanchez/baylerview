import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";


export const EditAccount = () => {
  const Navigate = useNavigate();
  const { id } = useParams(); // Get the account ID from the URL parameter
  /* const [account, setAccount] = useState(null);*/
  const [successModal, setsuccessModal] = useState(false);
  const [account, setAccount] = useState({
    username: "",
    password: "",
    vpassword: "",
    lastname: "",
    firstname: "",
    email: "",
    position: "",
    user_level: "",
    account_status: "",
  });

  useEffect(() => {
    // Fetch the account data from the API using the account ID
    axios
      .get(`https://baylerview-api.onrender.com/api/logins/${id}`)
      .then((response) => {
        setAccount(response.data.data);
        setData(response.data.data);
        setData(prevData => ({
          ...prevData,
          vpassword: prevData.password
        }));
      /*   console.log(response.data.data); */
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

 /*  console.log(account); */
 
  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  const [data, setData] = useState({
    username: "",
    password: "",
    vpassword: "",
    lastname: "",
    firstname: "",
    email: "",
    position: "",
    user_level: "",
    account_status: "",
  });

  console.log(data);
  
  function submit(e) {
    e.preventDefault();
   
    const numbers = ["1", "2", "3","4","5","6","7","8","9","10"];
    let hasNumber = false;

    for (let i = 0; i < numbers.length; i++) {
      if (data.password.includes(numbers[i])) {
        hasNumber = true;
        break;
      }
    }

    const special = ["!","@","#","$","%","^","&","*"];
    let hasSpecialCharacter = false;

    for (let i = 0; i < special.length; i++) {
      if (data.password.includes(special[i])) {
        hasSpecialCharacter = true;
        break;
      }
    }
   
   
    // Check if any required fields are empty

    if (data.firstname.trim() === ""){
      alert("First Name Field Empty")
      return;  
    }
    else if (data.lastname.trim() === ""){
      alert("Last Name Field Empty")
      return;    
    }
    else if (data.username.trim() === ""){
      alert("Username Field Empty")
      return;   
    }
    else if (data.email.trim()=== "" ){
      alert("Email Field Empty")
      return;    
    }
    else if (data.password.trim()=== ""){
      alert("Password Field Empty")
      return;    
      // pass must have minimum of 8 chars
    }
    else if (data.password.trim().length <= 7) { 
      alert("Passwords must be at least 8 characters")
      return;
    } 
    else if (!hasSpecialCharacter) { 
      alert("Passwords must have at least 1 special character ex: ! @ # $ % ^ & * ")
      return;
    } 
    else if (!hasNumber) { 
      alert("Passwords must have at least 1 number ex: 123456879")
      return;
    } 
    //check for empty field
    else if (data.vpassword.trim()=== ""){
      alert("Verified Password Field Empty")
      return;    
    }
    //check if pass & verified pass match
    else if (data.vpassword.trim()!==data.password.trim()){
      alert("Passwords do not match")
      return;    
    }
      //check for empty field
    else if (data.position.trim()=== ""){
      alert("Position Field Empty")
      return;  
    } else {
       axios
        .put(`https://baylerview-api.onrender.com/api/logins/${id}`, {
          username: data.username,
          password: data.password,
          lastname: data.lastname,
          firstname: data.firstname,
          email: data.email,
          position: data.position,
          user_level: data.user_level,
          account_status: data.account_status,
        })
        .then((res) => {
          // setsuccessModal(true);
          // setTimeout(() => {
          //   setsuccessModal(false);
          Navigate("/admin/accounts");
          // }, 3000);
          alert("Record Updated");
        });

      console.log(data)
    }
  }

  return (
    <>
    <div className="flex items-center justify-center p-5">
      <div className="mx-auto w-full">
        <form onSubmit={(e) => submit(e)}>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  Firstname
                </span>
                <input
                  onChange={(e) => handle(e)}
                  id="firstname"
                  defaultValue={account.firstname}
                  type="text"
                  name="firstname"
                  placeholder='First Name'
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"

                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  Lastname
                </span>
                <input
                  onChange={(e) => handle(e)}
                  id="lastname"
                  defaultValue={account.lastname}
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  Username
                </span>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => handle(e)}
                  id="username"
                  defaultValue={account.username}
                  placeholder="Username"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  Email Address
                </span>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => handle(e)}
                  id="email"
                  defaultValue={account.email}
                  placeholder="Email Address"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  Password
                </span>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => handle(e)}
                  id="password"
                  defaultValue={account.password}
                  placeholder="Password"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  Verify Password
                </span>
                <input
                  type="password"
                  name="vpassword"
                  onChange={(e) => handle(e)}
                  id="vpassword"
                  defaultValue={account.password}
                  placeholder="Verify Password"
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  Work Position
                </span>
                <input
                  type="text"
                  name="position"
                  onChange={(e) => handle(e)}
                  id="position"
                  defaultValue={account.position}
                  placeholder="Your role in your workplace."
                  className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>

            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <span className="mb-3 block text-sm font-medium text-gray-700">
                  User Access Level
                </span>
                <div className="relative">
                  <select
                    type="text"
                    name="user_level"
                    onChange={(e) => handle(e)}
                    id="user_level"
                    defaultValue={account.user_level}
                    placeholder="Administrator | Standard"
                    className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1]"
                  >
                    <option>Standard</option>
                    <option>Administrator</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <span className="mb-3 block text-sm font-medium text-gray-700">
              Account Status
            </span>
            <div className="relative">
              <select
                type="text"
                name="account_status"
                onChange={(e) => handle(e)}
                id="account_status"
                value={data.account_status}
                placeholder="Active | In-Active"
                className="w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-800 outline-none focus:border-[#6A64F1]"
              >
                <option>Active</option>
                <option>Inactive</option>
                <option>Deleted</option>
              </select>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="hover:shadow-form rounded-md bg-green-600 hover:bg-green-500 hover:text-black py-3 px-8 text-center text-base text-white outline-none"
            >
             Update
            </button>
            <Link to="/admin/accounts">
              <button className="hover:shadow-form rounded-md bg-red-600 hover:bg-red-500 hover:text-black py-3 px-8 text-center text-base text-white outline-none mx-3">
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  </>
  );
};
