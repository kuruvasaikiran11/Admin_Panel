// import React from "react";
// import "../dashboard/css/bootstrap.min.css";
// import "../dashboard/css/fontawesome.min.css";
// import "../dashboard/css/templatemo-style.css";

// const Accounts = () => {
//   return (
//     <>
//       <div className="" id="home">
//         <div className="container mt-5">
//           <div className="row tm-content-row">
//             <div className="col-12 tm-block-col">
//               <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
//                 <h2 className="tm-block-title">List of Accounts</h2>
//                 <p className="text-white">Accounts</p>
//                 <select className="custom-select">
//                   <option value="0">Select account</option>
//                   <option value="1">Admin</option>
//                   <option value="2">Editor</option>
//                   <option value="3">Merchant</option>
//                   <option value="4">Customer</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="row tm-content-row">
//             <div className="tm-block-col tm-col-avatar">
//               <div className="tm-bg-primary-dark tm-block tm-block-avatar">
//                 <h2 className="tm-block-title">Change Avatar</h2>
//                 <div className="tm-avatar-container">
//                   <img
//                     src="https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png"
//                     alt="Avatar"
//                     className="tm-avatar img-fluid mb-4"
//                   />
//                   <a href="#" className="tm-avatar-delete-link">
//                     <i className="far fa-trash-alt tm-product-delete-icon"></i>
//                   </a>
//                 </div>
//                 <button className="btn btn-primary btn-block text-uppercase">
//                   Upload New Photo
//                 </button>
//               </div>
//             </div>
//             <div className="tm-block-col tm-col-account-settings">
//               <div className="tm-bg-primary-dark tm-block tm-block-settings">
//                 <h2 className="tm-block-title">Account Settings</h2>
//                 <form action="" className="tm-signup-form row">
//                   <div className="form-group col-lg-6">
//                     <label for="name">Account Name</label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label for="email">Account Email</label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label for="password">Password</label>
//                     <input
//                       id="password"
//                       name="password"
//                       type="password"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label for="password2">Re-enter Password</label>
//                     <input
//                       id="password2"
//                       name="password2"
//                       type="password"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label for="phone">Phone</label>
//                     <input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label className="tm-hide-sm">&nbsp;</label>
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-block text-uppercase"
//                     >
//                       Update Your Profile
//                     </button>
//                   </div>
//                   <div className="col-12">
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-block text-uppercase"
//                     >
//                       Delete Your Account
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Accounts;

// import React, { useEffect, useState } from "react";
// import "../dashboard/css/bootstrap.min.css";
// import "../dashboard/css/fontawesome.min.css";
// import "../dashboard/css/templatemo-style.css";

// const Accounts = () => {
//   const [selectedAccount, setSelectedAccount] = useState("Admin");
//   const [accountData, setAccountData] = useState({});
//   const [avatarImage, setAvatarImage] = useState(
//     "https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png"
//   );

//   useEffect(() => {
//     // Retrieve data from localStorage and set it in state
//     const appData = JSON.parse(localStorage.getItem("appData"));
//     if (appData && appData.accountsPage) {
//       setAccountData(appData.accountsPage);
//     }
//   }, []);

//   useEffect(() => {
//     // Update the form fields and avatar image when selectedAccount changes
//     if (accountData[selectedAccount]) {
//       const selectedAccountData = accountData[selectedAccount];
//       document.getElementById("name").value = selectedAccountData.name;
//       document.getElementById("email").value = selectedAccountData.email;
//       document.getElementById("password").value = selectedAccountData.password;
//       document.getElementById("phone").value = selectedAccountData.phone;
//       setAvatarImage(selectedAccountData.profilePic);
//     }
//   }, [selectedAccount, accountData]);

//   const handleAccountChange = (event) => {
//     setSelectedAccount(event.target.value);
//   };

//   const handleProfileUpdate = (event) => {
//     event.preventDefault();

//     // Update the account data in the state
//     const updatedAccountData = {
//       ...accountData,
//       [selectedAccount]: {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         password: document.getElementById("password").value,
//         phone: document.getElementById("phone").value,
//         profilePic: avatarImage,
//       },
//     };

//     // Update the state
//     setAccountData(updatedAccountData);

//     // Update the localStorage with the updated data
//     localStorage.setItem("appData", JSON.stringify({ accountsPage: updatedAccountData }));
//   };

//   return (
//     <>
//       <div className="" id="home">
//         <div className="container mt-5">
//           <div className="row tm-content-row">
//             <div className="col-12 tm-block-col">
//               <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
//                 <h2 className="tm-block-title">List of Accounts</h2>
//                 <p className="text-white">Accounts</p>
//                 <select className="custom-select" onChange={handleAccountChange}>
//                   <option value="Admin">Admin</option>
//                   <option value="Editor">Editor</option>
//                   <option value="Merchant">Merchant</option>
//                   <option value="Customer">Customer</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="row tm-content-row">
//             <div className="tm-block-col tm-col-avatar">
//               <div className="tm-bg-primary-dark tm-block tm-block-avatar">
//                 <h2 className="tm-block-title">Change Avatar</h2>
//                 <div className="tm-avatar-container">
//                   <img
//                     src={avatarImage}
//                     alt="Avatar"
//                     className="tm-avatar img-fluid mb-4"
//                   />
//                   <a href="#" className="tm-avatar-delete-link">
//                     <i className="far fa-trash-alt tm-product-delete-icon"></i>
//                   </a>
//                 </div>
//                 <button className="btn btn-primary btn-block text-uppercase">
//                   Upload New Photo
//                 </button>
//               </div>
//             </div>
//             <div className="tm-block-col tm-col-account-settings">
//               <div className="tm-bg-primary-dark tm-block tm-block-settings">
//                 <h2 className="tm-block-title">Account Settings</h2>
//                 <form onSubmit={handleProfileUpdate} className="tm-signup-form row">
//                   <div className="form-group col-lg-6">
//                     <label for="name">Account Name</label>
//                     <input
//                       id="name"
//                       name="name"
//                       type="text"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label for="email">Account Email</label>
//                     <input
//                       id="email"
//                       name="email"
//                       type="email"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label for="password">Password</label>
//                     <input
//                       id="password"
//                       name="password"
//                       type="password"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label for="phone">Phone</label>
//                     <input
//                       id="phone"
//                       name="phone"
//                       type="tel"
//                       className="form-control validate"
//                     />
//                   </div>
//                   <div className="form-group col-lg-6">
//                     <label className="tm-hide-sm">&nbsp;</label>
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-block text-uppercase"
//                     >
//                       Update Your Profile
//                     </button>
//                   </div>
//                   <div className="col-12">
//                     <button
//                       type="submit"
//                       className="btn btn-primary btn-block text-uppercase"
//                     >
//                       Delete Your Account
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Accounts;

import React, { useEffect, useState } from "react";
import "../dashboard/css/bootstrap.min.css";
import "../dashboard/css/fontawesome.min.css";
import "../dashboard/css/templatemo-style.css";

const Accounts = () => {
  const [selectedAccount, setSelectedAccount] = useState("Admin");
  const [accountData, setAccountData] = useState({});
  const [avatarImage, setAvatarImage] = useState(
    "https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png"
  );
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [newPhoto, setNewPhoto] = useState(null);

  useEffect(() => {
    // Retrieve data from localStorage and set it in state
    const appData = JSON.parse(localStorage.getItem("appData"));
    if (appData && appData.accountsPage) {
      setAccountData(appData.accountsPage);
    }
  }, []);

  useEffect(() => {
    // Update the form fields and avatar image when selectedAccount changes
    if (accountData[selectedAccount]) {
      const selectedAccountData = accountData[selectedAccount];
      document.getElementById("name").value = selectedAccountData.name;
      document.getElementById("email").value = selectedAccountData.email;
      document.getElementById("password").value = selectedAccountData.password;
      document.getElementById("phone").value = selectedAccountData.phone;
      setAvatarImage(selectedAccountData.profilePic);
    }
  }, [selectedAccount, accountData]);

  const handleAccountChange = (event) => {
    setSelectedAccount(event.target.value);
  };

  const handleProfileUpdate = (event) => {
    event.preventDefault();

    // Update the account data in the state
    const updatedAccountData = {
      ...accountData,
      [selectedAccount]: {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        phone: document.getElementById("phone").value,
        profilePic: avatarImage,
      },
    };

    // Update the state
    setAccountData(updatedAccountData);

    // Update the localStorage with the updated data
    localStorage.setItem("appData", JSON.stringify({ accountsPage: updatedAccountData }));

    // Show confirmation message
    setConfirmationVisible(true);

    // Hide the confirmation message after a few seconds
    setTimeout(() => {
      setConfirmationVisible(false);
    }, 3000);
  };

  const handleDeletePhoto = () => {
    // Delete the photo (set it to a default value)
    setAvatarImage("https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png");

    // Update the localStorage with the deleted photo
    const updatedAccountData = {
      ...accountData,
      [selectedAccount]: {
        ...accountData[selectedAccount],
        profilePic: "https://templatemo.com/templates/templatemo_524_product_admin/img/avatar.png",
      },
    };

    // Update the state
    setAccountData(updatedAccountData);

    // Update the localStorage with the deleted photo
    localStorage.setItem("appData", JSON.stringify({ accountsPage: updatedAccountData }));
  };

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarImage(e.target.result);

        // Update the localStorage with the new photo
        const updatedAccountData = {
          ...accountData,
          [selectedAccount]: {
            ...accountData[selectedAccount],
            profilePic: e.target.result,
          },
        };

        // Update the state
        setAccountData(updatedAccountData);

        // Update the localStorage with the new photo
        localStorage.setItem("appData", JSON.stringify({ accountsPage: updatedAccountData }));
      };
      reader.readAsDataURL(file);
      setNewPhoto(file);
    }
  };

  return (
    <>
      <div className="" id="home">
        <div className="container mt-5">
          <div className="row tm-content-row">
            <div className="col-12 tm-block-col">
              <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                <h2 className="tm-block-title">List of Accounts</h2>
                <p className="text-white">Accounts</p>
                <select className="custom-select" onChange={handleAccountChange}>
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Merchant">Merchant</option>
                  <option value="Customer">Customer</option>
                </select>
              </div>
            </div>
          </div>
          <div className="row tm-content-row">
            <div className="tm-block-col tm-col-avatar">
              <div className="tm-bg-primary-dark tm-block tm-block-avatar">
                <h2 className="tm-block-title">Change Avatar</h2>
                <div className="tm-avatar-container">
                  <img
                    src={avatarImage}
                    alt="Avatar"
                    className="tm-avatar img-fluid mb-4"
                  />
                  <a href="#" className="tm-avatar-delete-link" onClick={handleDeletePhoto}>
                    <i className="far fa-trash-alt tm-product-delete-icon"></i>
                  </a>
                </div>
                <input type="file" id="fileInput" onChange={handlePhotoUpload} accept="image/*" style={{ display: "none" }} />
                <button
                  className="btn btn-primary btn-block text-uppercase"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Upload New Photo
                </button>
              </div>
            </div>
            <div className="tm-block-col tm-col-account-settings">
              <div className="tm-bg-primary-dark tm-block tm-block-settings">
                <h2 className="tm-block-title">Account Settings</h2>
                <form onSubmit={handleProfileUpdate} className="tm-signup-form row">
                  <div className="form-group col-lg-6">
                    <label for="name">Account Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="form-control validate"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label for="email">Account Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="form-control validate"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      className="form-control validate"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label for="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="form-control validate"
                    />
                  </div>
                  <div className="form-group col-lg-6">
                    <label className="tm-hide-sm">&nbsp;</label>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Update Your Profile
                    </button>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Delete Your Account
                    </button>
                  </div>
                </form>
                {isConfirmationVisible && (
                  <div className="alert alert-success mt-3" role="alert">
                    Information Updated Successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accounts;

