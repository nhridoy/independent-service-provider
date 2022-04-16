import React from "react";

const Blog = () => {
  return (
    <div>
      <div className="relative z-0 top-0 h-[40vh] flex items-center justify-center  bg-gray-700 w-full p-4">
        <h1 className="text-white text-5xl">Blog</h1>
      </div>
      <div className="p-4 grid md:grid-cols-3 gap-4">
        <div className="bg-white shadow-lg border rounded-lg p-8">
          <h1 className="text-2xl font-semibold mb-3">
            Difference between authorization and authentication
          </h1>
          <p className="text-gray-700">
            Authorization is the process of granting a user access to a
            resource. Authentication is the process of verifying that a user is
            who they say they are.
          </p>
        </div>
        <div className="bg-white shadow-lg border rounded-lg p-8">
          <h1 className="text-2xl font-semibold mb-3">
            What is Firebase and its alternatives?
          </h1>
          <p className="text-gray-700">
            Firebase is a cloud-based platform that give access to
            authentication system. Some of the alternatives to Firebase are:
            Supabase, Auth0, Oauth2 and many more.
          </p>
        </div>
        <div className="bg-white shadow-lg border rounded-lg p-8">
          <h1 className="text-2xl font-semibold mb-3">
            What are other services provided by firebase?
          </h1>
          <p className="text-gray-700">
            Firebase provides many other services like:
            <ul>
              <li>
                <b>Cloud Messaging</b> - This service is used to send push
                notifications to the users.
              </li>
              <li>
                <b>Cloud Functions</b> - This service is used to create
                server-side functions.
              </li>
              <li>
                <b>Cloud Storage</b> - This service is used to store files.
              </li>
              <li>
                <b>Cloud Firestore</b> - This service is used to store data in
                the form of documents.
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
