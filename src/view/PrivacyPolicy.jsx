import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import blueshadeimg from "../assets/img/Webp/termscondition-blueshade.webp";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <section className="position-relative pt-5 mt-xl-5 z_index1">
        <div className="position-absolute start-0 top-0 w-25 d-none d-md-block">
          <img className="w-100" src={blueshadeimg} alt="blueshadeimg" />
        </div>
        <div className="container">
          <div className="row justify-content-center z-100 position-relative">
            <div className="col-11 col-md-12">
              <h2 className="terms_heading pb-1 pb-md-3">PRIVACY POLICY</h2>
              <p className="terms_para mb-1 ">
                GlorryFX values your privacy and the protection of your personal
                data. This privacy policy describes what information we collect
                from you, how we collect it, how we use it, how we obtain your
                consent, how long we keep it in our databases and, if necessary,
                with whom we share it.
              </p>
              <p className="terms_para my-1">
                By using the website and services, you are accepting the
                practices described in this privacy policy. Use of the website
                and services is also subject to our terms and conditions.
              </p>
              <p className="terms_para">
                This privacy policy may change from time to time. Your continued
                use of the website and services after we make changes is deemed
                to be acceptance of those changes, so please check the policy
                periodically for updates. This privacy policy has been developed
                and is maintained in accordance with the California Online
                Privacy Protection Act (CalOPPA) and the GDPR (General Data
                Protection Regulation - European regulations).
              </p>
              <h3 className="text-white">1. GENERAL INFORMATION</h3>
              <p className="terms_para mb-2">
                The personal data of the users that are collected and processed
                through the website:
              </p>
              <ul className="text-white px-5 mb-3 mx-2">
                <li>www.glorryfx.com</li>
              </ul>{" "}
              <p className="terms_para mb-2">
                Will be under responsibility and in charge of:
              </p>
              <ul className="text-white px-5 mb-3 mx-2">
                <li>GlorryFX LLC.</li>
                <li>contact@glorryfx.com</li>
              </ul>
              <h3 className="text-white">2. TYPES OF INFORMATION GATHERED</h3>
              <p className="terms_para pb-md-1">
                The information we learn from customers helps personalize and
                continually improve your experience at GlorryFX. Here are the
                types of information we gather:{" "}
                <span className="d-block">
                  Information You Give Us. You provide information when you
                  search, read and view content on our website, purchase a
                  subscription, subscribe to our newsletter and/or communicate
                  with us through our contact information, our chat or our
                  contact forms. As a result of those actions, you might supply
                  us with the following information:
                </span>
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li> Name</li>
                <li>Email address</li>
                <li>
                  {" "}
                  Any additional information relating to you that you provide to
                  us directly or indirectly through our website and services.
                </li>
              </ul>
              <p className="terms_para pb-md-1">
                {" "}
                GlorryFX will not collect any personally identifiable
                information about you, unless you provide it.{" "}
                <span className="d-block">
                  Information Collected Automatically: By accessing and using
                  the website you automatically provide us with the following
                  information:
                </span>
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li>
                  {" "}
                  The device and usage information you use to access the website
                </li>
                <li>Your IP address </li>
                <li> Browser and device characteristics</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
              </ul>
              <p className="terms_para">
                If you access the website through a mobile phone, we will
                collect the following information:
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li>Mobile device ID</li>
                <li>Model and manufacturer </li>
                <li> Operating system </li>
                <li>Version information </li>
                <li>IP address</li>
              </ul>
              <p className="terms_para pb-md-1">
                <span className="fw-bold">Payment information:</span> Your
                payment data will be processed by the payment processors
                available on this website (Stripe), which will process and store
                your data securely and for the sole purpose of processing the
                purchase of subscriptions. GlorryFX reserves the right to
                contract any payment platform available on the market, which
                processes your data for the sole purpose of processing the
                purchase of subscriptions. See Stripe's privacy policy here:
              </p>{" "}
              <ul className="text-white mb-3 px-5 mx-3">
                <li>https://policies.google.com/privacy</li>
              </ul>
              <p className="terms_para pb-md-1">
                <span className="fw-bold">Social Media:</span> On our website
                you will find links and functions linked to different social
                media, where you can share your information.{" "}
                <span className="d-block mt-1">
                  It is advisable to consult the privacy policy and data
                  protection of each social network used on our website.
                </span>
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li>
                  Facebook: https://www.facebook.com/privacy/exsubscriptionation
                </li>
                <li>Instagram: http://instagram.com/about/legal/privacy/</li>
                <li>Discord: https://telegram.org/privacy</li>
              </ul>
              <h3 className="text-white">3. HOW LONG WE KEEP YOUR DATA</h3>
              <p className="terms_para pb-md-1">
                Personal data provided by users through the website and services
                will be kept for the time necessary to provide our subscriptions
                or until the user decides to unsubscribe to our newsletter.
                GlorryFX may be allowed to retain personal data for a longer
                period whenever the user has given consent to such processing,
                as long as such consent is not withdrawn. Furthermore, GlorryFX
                may be obliged to retain personal data for a longer period
                whenever required to do so for the performance of a legal
                obligation or upon order of an authority. Once the retention
                period expires, personal data shall be deleted. Therefore, the
                right to access, the right to erasure, the right to
                rectification and the right to data portability cannot be
                enforced after expiration of the retention period.
              </p>
              <h3 className="text-white">4. HOW WE USE YOUR INFORMATION. </h3>
              <p className="terms_para pb-md-1">
                In general, we use the information we collect primarily to
                provide, maintain, protect and improve our current website and
                services. We use personal information collected through our
                website as described below:
              </p>
              <ul className="text-white mb-3 mx-5 px-3">
                <li>Identify you as a user in our system.</li>
                <li>Provide the subscriptions.</li>
                <li>Process payments.</li>
                <li>Provide our alert service.</li>
                <li>Provide our content.</li>
                <li>
                  Improve our services, website, and how we operate our
                  business.
                </li>
                <li>
                  Understand and enhance your experience using our website and
                  services.
                </li>
                <li>
                  Respond to your comments or questions through our support
                  team.
                </li>
                <li>
                  Send you related information, including confirmations,
                  invoices, technical notices, updates, security alerts and
                  support and administrative messages.
                </li>
                <li>
                  Communicate with you about upcoming events, offers and news
                  about services offered by GlorryFX and our selected partners.
                </li>
                <li>Marketing purposes of GlorryFX.</li>
                <li>
                  {" "}
                  Link or combine your information with other information we get
                  from third parties to help understand your needs and provide
                  you with better service.
                </li>
                <li>
                  Protect, investigate and deter against fraudulent,
                  unauthorized or illegal activity.
                </li>
              </ul>
              <h3 className="text-white">5. HOW DO YOU GET MY CONSENT? </h3>
              <p className="terms_para pb-md-1">
                By purchasing a subscription, subscribing to our newsletter,
                contacting us through our contact forms or our contact
                information, and providing us with personal information to get
                in touch with you, you consent to our collection, storage and
                use of your information on the terms contained in this privacy
                policy. You may withdraw your consent by sending us your request
                via the contact information or the contact page.
              </p>
              <h3 className="text-white">6. HOW WE SHARE YOUR INFORMATION</h3>
              <p className="terms_para pb-md-1">
                The personal information of our customers and users is an
                important and fundamental part of our business. Under no
                circumstances will we sell or share information with third
                parties that has not been previously authorized by the user,
                client or owner of the personal data. We share user and customer
                information only and exclusively as described below.
                <span className="d-block">
                  <span className="fw-bold">
                    {" "}
                    Third-Party Service Providers.{" "}
                  </span>{" "}
                  We use third-party services to perform functions on our
                  website. Examples include: creating and hosting the website,
                  processing payments (Stripe, Telegram), sending emails,
                  analyzing data (Google Analytics), creating ads (Facebook,
                  Google), providing marketing assistance, and providing search
                  results. These third-party services and tools may have access
                  to personal information needed to perform their functions, but
                  may not use that information for other purposes. Information
                  shared with these third-party services will be treated and
                  stored in accordance with their respective privacy policies
                  and our privacy policy. Please refer to the privacy policy of
                  these third-party services.
                </span>
                <span className="d-block">
                  <span className="fw-bold">Business Transfers. </span>
                  In the event that GlorryFX creates, merges with, or is
                  acquired by another entity or company, your information will
                  likely be transferred. GlorryFX will send you an email or post
                  a prominent notice on our platform before your information
                  becomes subject to another privacy policy and the transfer and
                  handling of your private information will comply with all
                  applicable requirements.
                </span>
                <span className="d-block">
                  <span className="fw-bold">
                    Protection of GlorryFX and others.{" "}
                  </span>
                  We release personal information when we believe release is
                  appropriate to comply with the law, enforce or apply our Terms
                  and conditions and other agreements, or protect the rights,
                  property, or safety of GlorryFX, our users or others. This
                  includes exchanging information with other companies and
                  organizations for fraud protection and credit risk reduction
                </span>
                <span className="d-block">
                  <span className="fw-bold">With Your Consent</span>
                  Other than as set out above, you will receive notice when
                  personally identifiable information about you might go to
                  third parties, and you will have an opportunity to choose not
                  to share the information.
                </span>
                <span className="d-block">
                  <span className="fw-bold">Anonymous Information.</span>
                  GlorryFX uses the anonymous browsing information collected
                  automatically by our servers primarily to help us administer
                  and improve the Website. We may also use aggregated anonymous
                  information to provide information about the Website to
                  potential business partners and other unaffiliated entities.
                  This information is not personally identifiable.
                </span>
                <span className="d-block">
                  <span className="fw-bold">Email Address.</span>
                  The email address that you supply to us for purposes of
                  receiving our email communications will never be rented or
                  sold to a third party.
                </span>
              </p>
              <h3 className="text-white">7. PROTECTING YOUR INFORMATION</h3>
              <p className="terms_para pb-md-1">
                We work to protect the security of your information during
                transmission by using Secure Sockets Layer (SSL) software, which
                encrypts information you provide through the website. We
                restrict authorized access to your personal information to those
                persons who have a legitimate purpose to know that information
                and to those persons you have authorized to have access to that
                information. GlorryFX follows generally accepted industry
                standards to protect the personal information submitted to us,
                both during transmission and once GlorryFX receives it. No
                method of transmission over the Internet, or method of
                electronic storage, is 100% secure. Therefore, while GlorryFX
                strives to use commercially acceptable means to protect your
                personal information, we cannot guarantee its absolute security.
                We will not sell, distribute, or lease your personal information
                to third parties unless we have your permission or are required
                by law to do so.
              </p>
              <h3 className="text-white">8. RIGHTS</h3>
              <p className="terms_para pb-md-1">
                Users who provide information through our website, as data
                subjects and data owners, have the right to access, rectify,
                download or delete their information, as well as to restrict and
                object to certain processing of their information. While some of
                these rights apply generally, others apply only in certain
                limited circumstances. We describe these rights below:
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li>
                  <span className="fw-bold">Access and portability: </span>to
                  access and know what information is stored in our servers, you
                  can send us your request through our contact information.
                </li>
                <li>
                  <span className="fw-bold me-1">
                    Rectify, Restrict, Limit, Delete:
                  </span>
                  You can also rectify, restrict, limit or delete much of your
                  information.
                </li>

                <li>
                  <span className="fw-bold me-1">Object:</span>
                  When we process your information based on our legitimate
                  interests as explained above, or in the public interest, you
                  may object to this processing in certain circumstances. In
                  such cases, we will stop processing your information unless we
                  have compelling legitimate reasons to continue processing it
                  or where it is necessary for legal reasons.
                </li>
                <li>
                  <span className="fw-bold me-1">Revoke consent:</span>
                  Where you have previously given your consent, such as to allow
                  us to process and store your personal information, you have
                  the right to revoke your consent to the processing and storage
                  of your information at any time. For example, you may withdraw
                  your consent by updating your settings. In certain cases, we
                  may continue to process your information after you have
                  withdrawn your consent if we have a legal basis for doing so
                  or if your withdrawal of consent was limited to certain
                  processing activities.
                </li>
                <li>
                  <span className="fw-bold me-1">Complaint:</span>
                  If you wish to file a complaint about our use of your
                  information (and without prejudice to any other rights you may
                  have), you have the right to do so with your local supervisory
                  authority. Users can exercise all these rights by contacting
                  us through the contact information or the contact page.
                </li>
                <li>
                  <span className="fw-bold me-1">
                    Rights related to automated decision-making, including
                    profiling:
                  </span>
                  website users may request that we provide a copy of the
                  automated processing activities we conduct if they believe
                  that data is being unlawfully processed.
                </li>
              </ul>
              <p className="terms_para pb-md-1">
                Users may exercise their rights in relation to the personal data
                they provide to GlorryFX, at any time, by sending us their
                request through our contact information and we will process and
                respond to their request as soon as possible.
              </p>
              <h3 className="text-white">
                9. CHILDREN’S ONLINE PRIVACY PROTECTION{" "}
              </h3>
              <p className="terms_para pb-md-1">
                We comply with the requirements of the California Online Privacy
                Protection Act (CalOPPA) and the GDPR (General Data Protection
                Regulation - European regulations), regarding the protection of
                the personal data of minors. We do not collect any information
                from children under the age of 13. Our services are intended for
                persons 13 years of age or older. If we become aware that a
                child under 13 has provided personal information, we will take
                immediate steps to delete that information.
              </p>
              <h3 className="text-white">10. THIRD PARTIES</h3>
              <p className="terms_para pb-md-1">
                Except as otherwise expressly included in this Privacy Policy,
                this document addresses only the use and disclosure of
                information GlorryFX collects from you. If you disclose your
                information to others, whether other users or suppliers on
                GlorryFX, different rules may apply to their use or disclosure
                of the information you disclose to them. GlorryFX does not
                control the privacy policies of third parties, and you are
                subject to the privacy policies of those third parties where
                applicable. GlorryFX is not responsible for the privacy or
                security practices of other websites on the Internet, even those
                linked to or from the website. GlorryFX encourages you to ask
                questions before you disclose your personal information to
                others.
              </p>
              <h3 className="text-white">11. CONTACT US </h3>
              <p className="terms_para pb-md-1">
                If you have questions or concerns about this privacy policy and
                the handling and security of your data, please contact us
                through our contact forms, our chat or by using the contact
                information below:
                <span className="d-block fw-bold">GlorryFX LLC.</span>
                <span className="d-block fw-bold">contact@glorryfx.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
