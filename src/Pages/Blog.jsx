import React from 'react';

const Blog = () => {
    return (
        <>
        <section className="">
        <div className="text-center text-5xl font-bold py-10">Blog</div>
  
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <div className="space-y-4">
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  What is cors?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Cross-origin resource sharing (CROS) is a mechanism that allows
                  restricted resources on a web page to be requested from another
                  domain outside the domain from which the first resource was
                  served. A web page may freely embed cross-origin images,
                  stylesheets, scripts, iframes, and videos.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  Why are you using firebase? What other options do you have to
                  implement authentication?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  Firebase Authentication provides backend services, easy-to-use
                  SDKs, and ready-made UI libraries to authenticate users to your
                  app. It supports authentication using passwords, phone numbers,
                  popular federated identity providers like Google, Facebook and
                  Twitter, and more. The best Firebase alternatives are: Auth0,
                  MongoDB. MongoDB,Passport, Okta, JSON Web Token, Keycloak,
                  Amazon Cognito.
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                  How does the private route work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                  How does the private route work? The private route component is
                  similar to the public route, the only change is that redirect
                  URL and authenticate condition. If the user is not authenticated
                  he will be redirected to the login page and the user can only
                  access the authenticated routes If he is authenticated (Logged
                  in).
                </p>
              </details>
              <details className="w-full border rounded-lg" open="">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
                What is Node? How does Node work?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">
                It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                </p>
              </details>
            </div>
          </div>
        </section>
      </>
    );
};

export default Blog;