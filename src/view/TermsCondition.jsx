import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import blueshadeimg from "../assets/img/Webp/termscondition-blueshade.webp";

const TermsCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Hero />
      <section className="position-relative pt-5 mt-xl-5 z_index1">
        <div className="position-absolute start-0 top-0 w-25 d-none d-md-block">
          <img className="w-100" src={blueshadeimg} alt="blueshadeimg" />
        </div>
        <div className="container">
          <div className="row justify-content-center z-100 position-relative">
            <div className="col-11 col-md-12">
              <h2 className="terms_heading pb-1 pb-md-3">
                TERMS &<span className="d-block d-md-inline"> CONDITIONS</span>
              </h2>
              <p className="terms_para pb-md-1">
                GlorryFX is owned and operated by GlorryFX LLC. These are the
                terms and conditions for www.glorryfx.com. By using the website
                and services, you agree to be bound by these terms and
                conditions and our privacy policy. In these terms and
                conditions, the words "website" refer to the GlorryFX website,
                "we", "us", "our" and “GlorryFX” refer to GlorryFX LLC and "you"
                “client” and “user" refer to you, the GlorryFX user. The
                following terms and conditions apply to the website and services
                offered by GlorryFX. This includes the mobile and tablet
                versions as well as any other version of GlorryFX accessible via
                desktop, mobile, tablet, social media or other devices. IF YOU
                DO NOT AGREE WITH ALL OF THESE TERMS OF USE, THEN YOU ARE
                EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST
                DISCONTINUE USE IMMEDIATELY.
              </p>

              <h3 className="text-white">1. ACCEPTANCE OF TERMS</h3>
              <p className="terms_para pb-md-1">
                This agreement sets forth legally binding terms for your use of
                GlorryFX. By using the website and services, you agree to be
                bound by this agreement. If you do not agree to the terms of
                this agreement, you must not use the website and services. We
                may modify this agreement from time to time, and such
                modification shall be effective upon posting on the website. You
                agree to be bound by any modifications to these terms and
                conditions when you use the website and the services offered on
                the website after such modification is posted on the website;
                therefore, it is important that you review this agreement
                regularly. The services are not directed to persons under the
                age of 18. GlorryFX does not knowingly collect information from
                persons under the age of 18. If you are under the age of 18,
                please do not submit any personal information about yourself to
                GlorryFX unless you have proper authorization from a parent or
                appropriate legal guardian. In accordance with the U.S.
                Children’s Online Privacy Protection Act, if we receive actual
                knowledge that anyone under the age of 13 has provided personal
                information to us without the requisite and verifiable parental
                consent, we will delete that information from the Site as
                quickly as is reasonably practical. It is the responsibility of
                parents and legal guardians to determine whether any of the
                content and services offered on the website is appropriate for
                their children or minors under their guardianship.GlorryFX may,
                in its sole discretion, refuse to offer the services to any
                entity or user and change its eligibility criteria at any time.
                This provision is void where prohibited by law and the right to
                access the service and the website is revoked in such
                jurisdictions. The website and services may only be used in
                compliance with these terms and all applicable local, state,
                national and international laws, rules and regulations.{" "}
                <span className="d-block mt-2">
                  By using the website and services, you represent and warrant
                  that you have the full right, power and authority to enter
                  into this agreement and to fully perform all of your
                  obligations hereunder. You further represent and warrant that
                  you are under no legal disability or contractual restriction
                  that prevents you from entering into this agreement.
                </span>
              </p>
              <h3 className="text-white">2. NOTIFICATIONS AND NEWSLETTER</h3>
              <p className="terms_para pb-md-1">
                By providing GlorryFX with your email address, you agree that we
                may use your email address to send you important notifications
                and communications about our services, news and special content.
                If you do not wish to receive these emails, you may opt-out of
                receiving them by sending us your request through our contact
                information or by using the "unsubscribe" option in the emails.
                Opting out may prevent you from receiving emails regarding our
                services, important news, and special content.
              </p>
              <h3 className="text-white">3. SUBSCRIPTIONS</h3>
              <p className="terms_para pb-md-1">
                GlorryFX offers digital monthly and/or yearly subscription
                services. When a user purchases a subscription, GlorryFX will
                send a confirmation email. This confirmation email will be
                produced automatically so that the user has confirmation of
                payment and initiation of the subscription. If the user does not
                receive the purchase confirmation and subscription initiation
                email, it may have been sent to their spam folder. Should the
                user need assistance gaining access to the service, it is their
                sole responsibility to contact support immediately. GLORRYFX
                will not refund any subscriptions due to failure of remembrance
                and/or failure of communication. If you do not receive the
                digital product link upon purchasing, you can immediately
                contact contact@glorryfx.com with your transaction/payment
                details to ensure your product is delivered as soon as possible.
                <span className="mt-2 d-block">
                  Since your purchase is a digital product, it is deemed “used”
                  after download or opening or progressing through the
                  educational content, and all purchases made on
                  www.glorryfx.com are non-refundable or exchangeable. Since the
                  products made available here are intangible, there is a strict
                  no refund policy and the digital product is deemed “used”.
                  This does not affect your statutory rights. Subscriptions
                  include automatic recurring payments. You authorize GlorryFX
                  to renew your subscription and to charge you periodically and
                  progressively on each billing date. The subscription billing
                  date is the date on which you purchase the subscription and
                  make the first payment. On the corresponding billing date, you
                  will be automatically charged the corresponding subscription
                  fee which occurs 30 days after purchase. The subscription will
                  remain active until you cancel it or we terminate it. We will
                  bill you for the subscription billing fee in the payment
                  method you choose during registration. Subscriptions will
                  automatically renew for an additional period unless canceled
                  before the next billing period. To cancel subscriptions, users
                  must cancel through the stripe portal by clicking here or they
                  may also submit a cancellation request through our contact
                  information and the subscription will be canceled for the next
                  billing period. By purchasing any product the user hereby
                  agrees to attempt to modify/cancel their own membership prior
                  to reaching out to support. Should any server side issues
                  occur, preventing cancellation the user hereby agrees to
                  contact GLORRYFX LLC immediately for resolutions. If a
                  subscription is canceled, the user may continue to use the
                  subscription until the next billing period, at which time the
                  subscription will be terminated. GlorryFX IS responsible for
                  all recurring charges after receiving notice from the user who
                  wishes to cancel their subscription. By signing this
                  disclaimer and/or agreeing to these terms and conditions you
                  acknowledge that GLORRYFX LLC is not responsible for reminding
                  you to cancel your recurring membership. You are entirely
                  responsible for canceling your membership at which point you
                  deem necessary. Under no circumstances is GLORRYFX LLC to be
                  accountable for any forgotten memberships. All users are
                  entirely responsible for ANY billed monthly cycle, regardless
                  of any other conditions pertaining. By signing this
                  disclaimer, you understand that you are solely responsible for
                  reaching out to GLORRYFX LLC through email or by any means
                  necessary should you have any questions, concerns, or comments
                  pertaining to your membership, or other. By signing this
                  disclaimer, you forfeit your right to contest any and all
                  recurring membership charges through any payment processor,
                  and acknowledge your understanding of all charges associated
                  with GLORRYFX LLC.
                </span>
              </p>
              <h3 className="text-white">4. PAYMENTS</h3>
              <p className="terms_para pb-md-1">
                Subscriptions can be paid through Stripe (payment processor
                available on the platform). Payment can be made through the
                Telegram bot or via glorryfx.com. The user agrees that payments
                should ONLY be made with credit or debit cards associated with
                the rightful owner. At NO time should the user use a third
                party’s payment details for subscription. The subscription
                payment will be charged to your credit/debit card immediately
                after completing the payment and subscription registration
                process. The subscription will be activated upon completion of
                the payment and registration process and will be charged on each
                billing date automatically. Once the transaction is processed,
                we will send an electronic receipt to the user's email address.
                <span className="mt-2 d-block">
                  If your card is declined, you will receive an error message.
                  No payment will be charged to your card and no order will be
                  processed. There may be a pending transaction on your account
                  until your card issuing bank withdraws the authorisation. This
                  usually takes 2 to 5 business days. Your card may be declined
                  for various reasons such as insufficient funds, AVS (Address
                  Verification System) mismatch, security risk, or you have
                  entered an incorrect security code.
                </span>
                <span className="mt-2 d-block">
                  If your payment is declined, you must provide an alternative
                  payment method or provide another card where payment can be
                  charged and processed. Failure to provide an alternative
                  payment method will result in an immediate cancellation of our
                  services to the user. Your payment data will be processed and
                  stored securely and for the sole purpose of processing the
                  purchase of subscriptions. GlorryFX reserves the right to
                  contact any payment platform available on the market, which
                  processes your data for the sole purpose of processing the
                  purchase of subscriptions. Under no circumstances is GlorryFX
                  LLC by any means liable for forgotten subscriptions. It is the
                  customer's sole responsibility to manage, cancel, or pause
                  subscriptions. Should the customer need assistance with any
                  subscription modifications, GlorryFX LLC can assist with
                  modifications by emailing “contact@glorryfx.com”. Users are
                  required to email 48 hours in advance prior to their last day
                  in the billing cycle to ensure timely subscription update
                  processing(s). Although GlorryFX LLC is able to assist with
                  such modifications, the customer understands and acknowledges
                  that modifications of payment methods have been made easily
                  accessible via Telegram Bot & www.glorryfx.com therefore, the
                  user has every sole right and responsibility to cancel before
                  the next billing period. Under no circumstances is GlorryFX
                  LLC by any means liable for forgotten subscriptions.
                </span>
              </p>
              <h3 className="text-white">5. DISCLAIMER</h3>
              <p className="terms_para pb-md-1">
                By using our website and services, you represent and agree that
                GlorryFX, at no time guarantees any profits or benefits from the
                use of any of the services available on the website. The sale
                and purchase of shares in the foreign exchange market may be
                considered as risky transactions that may involve potential
                substantial losses of your investments in these markets. When
                the user uses our services in connection with transactions and
                negotiations in the foreign exchange markets, he/she declares
                and accepts that investments and trading in securities involve
                risks of loss of capital and investment and that the user is
                also exposed to such risks. By using our services, the user
                declares and accepts the risks inherent in trading stocks and
                conducting transactions in the foreign exchange markets. Do not
                trade or invest based only on the information provided inside of
                the www.glorryfx.com site, OR the GLORRYFX LLC associated chats.
                By viewing the information within the website and chat rooms at
                www.glorryfx.com and associated chat rooms you agree that this
                is general education and general discussion, and you will not
                hold GLORRYFX LLC or anyone affiliated with GLORRYFX LLC
                responsible for ANY losses or damages resulting from the
                information or general advice provided here by GLORRYFX LLC or
                its employees, owners, or independent contractors. Forex trading
                has large potential rewards, but also has large, extreme, risk
                factors. You must be aware of the risks and be willing to accept
                them to invest in the currency market. By signing this
                disclaimer, you agree to having a firm understanding of the
                risks associated with the currency market. Do not trade with
                money you cannot afford to lose. This website, and associated
                chat rooms, is neither a solicitation nor an offer to Buy/Sell
                spot forex or any other financial product, currency or
                commodity. No representation is being made that any type of
                account whether it be a live account or a demo account will or
                is probable to achieve profits or losses like those discussed in
                any material on the website, or past, present or future chat
                room discussion or on any associated social media source. The
                past results and performance of any trading system, market
                commentary, chat discussion, social media interaction, or other
                source, is NOT a guarantee of future results and should be used
                at your own risk. High risk warning: The high degree of leverage
                in forex trading involves extreme risk of loss and is not
                suitable for all investors. By signing this disclaimer, you
                understand that your leverage used in the currency markets
                directly correlates to your risk, and you understand and accept
                that high leverage accounts yield higher risk. By signing this
                disclaimer, you are acknowledging that GLORRYFX LLC is not
                responsible, or influential, in any decision made regarding
                leverage OR any other currency related decision. The content of
                this website and the content available through the alert service
                is provided as general information and should not be taken as
                professional or financial advice and you are advised to consult
                other more reliable and accurate sources. Any use of the
                material provided on this website and in the alert service is at
                your own risk and responsibility.
                <span className="mt-2 d-block">
                  Your use of our information and the content available through
                  the alert service must be based on your own due diligence and
                  research, you agree that GlorryFX is not responsible at any
                  time, or under any circumstances, for any success or failure
                  of your investments, transactions or trades that are directly
                  or indirectly related to the use of our website and the use of
                  the information provided through the alert service. Do not
                  trade or invest based solely on the information and content
                  available through the website or information provided through
                  the alert service. By accessing and viewing any material or
                  information within this website or through the alert service,
                  you agree that it is general informational and educational
                  material and you will not hold any person or entity liable for
                  any loss or damage resulting from the use of the information
                  or content provided by GlorryFX through the alert service..
                  Past performance of any trading system or methodology is not
                  necessarily indicative of future results.
                </span>
                <span className="d-block mt-2">
                  By accessing the website and the content available on the
                  website, you accept personal responsibility for the results of
                  using the information available on the content. You agree that
                  GlorryFX has not guaranteed the results of any actions taken,
                  whether or not advised by this website or the content.
                  GlorryFX provides resources and content for informational
                  purposes only. The content of this website is provided for
                  general information and should not be taken as professional
                  advice. Any use of the material provided on this website is at
                  your own risk.
                </span>
              </p>
              <h3 className="text-white">6. THIRD-PARTY MATERIALS.</h3>
              <p className="terms_para pb-md-1">
                “Third-Party Materials” means any content, images, videos, texts
                or other material that is owned by a third party, such as stock
                images, videos and texts. Such Third-Party Materials are subject
                to the applicable third-party terms and licenses, and may only
                be used as permitted by such terms and licenses.
              </p>
              <h3 className="text-white">7. COPYRIGHT</h3>
              <p className="terms_para pb-md-1">
                All materials on GlorryFX, including, without limitation, names,
                logos, trademarks, images, text, columns, graphics, videos,
                photographs, illustrations, software and other elements are
                protected by copyrights, trademarks and/or other intellectual
                property rights owned and controlled by GlorryFX or by third
                parties that have licensed or otherwise provided their material
                to the website. You acknowledge and agree that all materials on
                GlorryFX are made available for limited, non-commercial,
                personal use only. Except as specifically provided herein. No
                material may be copied, reproduced, republished, sold,
                downloaded, posted, transmitted, or distributed in any way, or
                otherwise used for any purpose, by any person or entity, without
                GlorryFX prior express written permission. You may not add,
                delete, distort, or otherwise modify the material. Any
                unauthorized attempt to modify any material, to defeat or
                circumvent any security features, or to utilize GlorryFX or any
                part of the material for any purpose other than its intended
                purposes is strictly prohibited.
              </p>
              <h3 className="text-white">8. COPYRIGHT INFRINGEMENT </h3>
              <p className="terms_para pb-md-1">
                GlorryFX will respond to all inquiries, complaints and claims
                regarding alleged infringement for failure to comply with or
                violation of the provisions contained in the Digital Millennium
                Copyright Act (DMCA). GlorryFX respects the intellectual
                property of others, and expects users to do the same. If you
                believe, in good faith, that any material provided on or in
                connection with the website infringes your copyright or other
                intellectual property right, please send us your copyright
                infringement request pursuant to Section 512 of the Digital
                Millennium Copyright Act (DMCA), via our contact information,
                with the following information:
              </p>
              <ul className="text-white mb-3 mx-5 px-3">
                <li>
                  Identification of the intellectual property right that is
                  allegedly infringed. All relevant registration numbers or a
                  statement regarding ownership of the work should be included.
                </li>
                <li>
                  A statement that specifically identifies the location of the
                  infringing material, in sufficient detail so that GlorryFX can
                  find it on the website.{" "}
                </li>
                <li>Your name, address, telephone number and email address.</li>
                <li>
                  A statement by you that you have a good faith belief that the
                  use of the allegedly infringing material is not authorized by
                  the copyright owner, or its agents, or by law.
                </li>
                <li>
                  A statement by you, made under penalty of perjury, that the
                  information in your notification is accurate, and that you are
                  the copyright owner or authorized to act on its behalf.
                </li>
                <li>
                  An electronic or physical signature of the copyright owner or
                  of the person authorized to act on the copyright owner's
                  behalf.
                </li>
              </ul>
              <h3 className="text-white">9. CONFIDENTIAL INFORMATION</h3>
              <p className="terms_para pb-md-1">
                Information provided by our clients through our services will be
                treated as confidential information and will be used solely for
                the purpose of providing our services properly. GlorryFX will
                protect such confidential Information from disclosure to third
                parties by employing the same degree of care used to protect its
                own confidentiality or proprietary information of similar
                importance. If necessary to carry out a prospective business
                relationship, GlorryFX may disclose confidential information
                received pursuant to our services to employees and/or
                consultants with a need to know, provided that the consultants
                are obligated to protect such confidential information from
                unauthorized use and disclosure. Confidential information shall
                not be disclosed to any third party without the prior written
                consent of the client who is the owner of the information.
              </p>
              <h3 className="text-white">10. PERSONAL DATA</h3>
              <p className="terms_para pb-md-1">
                Any personal information you submit in connection with the
                services and use of the website will be used in accordance with
                our privacy policy. By using the services, you agree that we may
                collect and store your personal information. Please see our
                privacy policy.
              </p>
              <h3 className="text-white">
                11. LICENSE TO USE THE PLATFORM AND SERVICES
              </h3>
              <p className="terms_para pb-md-1">
                GlorryFX grants you a personal, worldwide, royalty-free,
                non-assignable and non-exclusive license to use the platform
                that GlorryFX provides to you as part of the services. This
                license is for the sole purpose of allowing you to use and enjoy
                the benefit of the services provided by GlorryFX, in the manner
                permitted by these terms. You may not copy, modify, distribute,
                sell or rent any part of our services or the included software,
                nor may you reverse engineer or attempt to extract the source
                code of such software, unless such restrictions are prohibited
                by law or you have our written permission.
                <span className="d-block mt-2">
                  {" "}
                  You agree not to use the website and services in a negligent,
                  fraudulent or unlawful manner. The user also agrees not to
                  engage in any conduct or action that may damage the image,
                  interests or rights of the GlorryFX website or third parties.
                </span>
                <span className="d-block mt-2">
                  This service prohibits the sending of messages or mass e-mails
                  that: (1) Any messages that are categorized as SPAM. (2) Have
                  harassing, abusive, defamatory, obscene, bad faith, unethical
                  or otherwise unlawful content (3) Distribute Trojan horses,
                  viruses or other malicious computer software (4) Are intended
                  to commit fraud, impersonation, impersonation, impersonation,
                  (5) distribute intellectual property without having ownership
                  or a license to distribute such property (6) violate, in any
                  way, the terms of service, privacy policy or rules of this
                  website or the recipients.
                </span>
                <span className="d-block mt-2">
                  GlorryFX reserves the right to terminate your access
                  immediately, with or without notice, and without liability to
                  you, if GlorryFX believes that you have violated any of these
                  terms or interfered with use of the website or services.
                </span>
              </p>
              <h3 className="text-white">12. MODIFICATIONS </h3>
              <p className="terms_para pb-md-1">
                We reserve the right to change, modify, or remove the contents
                of the service at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information in our service. We also reserve the right
                to modify or discontinue all or part of the service without
                notice at any time. We will not be liable to you or any third
                party for any modification, price change, suspension, or
                discontinuance of the service.{" "}
                <span className="d-block mt-2">
                  We cannot guarantee the Site will be available at all times.
                  We may experience hardware, software, or other problems or
                  need to perform maintenance related to the service, resulting
                  in interruptions, delays, or errors. We reserve the right to
                  change, revise, update, suspend, discontinue, or otherwise
                  modify the service at any time or for any reason without
                  notice to you. You agree that we have no liability whatsoever
                  for any loss, damage, or inconvenience caused by your
                  inability to access or use the service during any downtime or
                  discontinuance of the service. Nothing in these Terms of Use
                  will be construed to obligate us to maintain and support the
                  Site or to supply any corrections, updates, or releases in
                  connection therewith.
                </span>
              </p>
              <h3 className="text-white">13. PROHIBITED ACTIVITIES</h3>
              <p className="terms_para pb-md-1">
                The content and information available on the website (including,
                but not limited to, data, information, text, music, sound,
                photos, graphics, video, maps, icons or other material), as well
                as the infrastructure used to provide such Content and
                information, is proprietary to GlorryFX or licensed to the
                GlorryFX by third parties. For all content other than your
                content, you agree not to otherwise modify, copy, distribute,
                transmit, display, perform, reproduce, publish, license, create
                derivative works from, transfer, or sell or re-sell any
                information, software or services obtained from or through the
                website. In addition, the following activities are prohibited:
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li>
                  Access, monitor, reproduce, distribute, transmit, broadcast,
                  display, sell, license, copy or otherwise exploit any content
                  of the services, including but not limited to, using any
                  robot, spider, scraper or other automated means or any manual
                  process for any purpose not in accordance with this agreement
                  or without our express written permission.
                </li>
                <li>
                  Violate the restrictions in any robot exclusion headers on the
                  services or bypass or circumvent other measures employed to
                  prevent or limit access to the services.
                </li>
                <li>
                  Take any action that imposes, or may impose, in our
                  discretion, an unreasonable or disproportionately large load
                  on our infrastructure.
                </li>
                <li>
                  Deep-link to any portion of the services for any purpose
                  without our express written permission.
                </li>
                <li>
                  "Frame", "mirror" or otherwise incorporate any part of the
                  services into any other websites or service without our prior
                  written authorization.
                </li>
                <li>
                  Attempt to modify, translate, adapt, edit, decompile,
                  disassemble, or reverse engineer any software programs used by
                  GlorryFX in connection with the services.
                </li>
                <li>
                  Circumvent, disable or otherwise interfere with
                  security-related features of the services or features that
                  prevent or restrict use or copying of any content.
                </li>
                <li>
                  Download any content unless it’s expressly made available for
                  download by GlorryFX.
                </li>
              </ul>
              <h3 className="text-white">14. DISCLAIMER OF WARRANTIES </h3>
              <p className="terms_para pb-md-1">
                Because of the nature of the Internet GlorryFX provides and
                maintains the website on an "as is", "as available" basis and
                makes no promise that use of the website will be uninterrupted
                or entirely error free. We are not responsible to you if we are
                unable to provide our Internet services for any reason beyond
                our control.{" "}
                <span className="d-block mt-2">
                  Our website may from time to time contain links to other
                  websites which are not under the control of and are not
                  maintained by us. These links are provided for your
                  convenience only and we are not responsible for the content of
                  those sites.{" "}
                </span>
                <span className="d-block mt-2">
                  Except as provided above we can give no other warranties,
                  conditions or other terms, express or implied, statutory or
                  otherwise and all such terms are hereby excluded to the
                  maximum extent permitted by law. You will be responsible for
                  any breach of these terms by you and if you use the website in
                  breach of these terms you will be liable to and will reimburse
                  GlorryFX for any loss or damage caused as a result. GlorryFX
                  will not be liable in any amount for failure to perform any
                  obligation under this agreement if such failure is caused by
                  the occurrence of any unforeseen event beyond its reasonable
                  control including without limitation Internet outages,
                  communications outages, fire, flood, war or act of God.
                </span>
                <span className="d-block mt-2">
                  These terms do not affect your statutory rights as a consumer
                  which are available to you. Subject as aforesaid, to the
                  maximum extent permitted by law, GlorryFX excludes liability
                  for any loss or damage of any kind howsoever arising,
                  including without limitation any direct, indirect or
                  consequential loss whether or not such arises out of any
                  problem you notify to GlorryFX and GlorryFX shall have no
                  liability to pay any money by way of compensation, including
                  without limitation all liability in relation to:
                </span>
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li>Any incorrect or inaccurate information on the website.</li>
                <li>
                  The infringement by any person of any Intellectual Property
                  Rights of any third party caused by their use of the website
                  or service purchased through the website.
                </li>
                <li>
                  Any loss or damage resulting from your use or the inability to
                  use the website or resulting from unauthorized access to, or
                  alteration of your transmissions or data in circumstances
                  which are beyond our control.
                </li>
                <li>
                  Any loss of profit, wasted expenditure, corruption or
                  destruction of data or any other loss which does not directly
                  result from something we have done wrong.
                </li>
                <li>
                  Any amount or kind of loss or damage due to viruses or other
                  malicious software that may infect a user's computer
                  equipment, software, data or other property caused by persons
                  accessing or using content from the website or from
                  transmissions via emails or attachments received from
                  GlorryFX.
                </li>
                <li>
                  All representations, warranties, conditions and other terms
                  which but for this notice would have effect.
                </li>
              </ul>
              <h3 className="text-white">15. ELECTRONIC COMMUNICATIONS</h3>
              <p className="terms_para pb-md-1">
                No responsibility will be accepted by GlorryFX for failed,
                partial or garbled computer transmissions, for any computer,
                telephone, cable, network, electronic or internet hardware or
                software malfunctions, failures, connections, availability, for
                the acts or omissions of any Cleaner User, internet
                accessibility or availability or for traffic congestion or
                unauthorized human act, including any errors or mistakes.{" "}
              </p>
              <h3 className="text-white">16. INDEMNIFICATION</h3>
              <p className="terms_para pb-md-1">
                You agree to defend and indemnify GlorryFX from and against any
                claims, causes of action, demands, recoveries, losses, damages,
                fines, penalties or other costs or expenses of any kind or
                nature including but not limited to reasonable legal and
                accounting fees, brought by third parties as a result of:
              </p>
              <ul className="text-white mb-3 px-5 mx-3">
                <li>
                  Your breach of this agreement or the documents referenced
                  herein.
                </li>
                <li>
                  Your violation of any law or the rights of a third party.
                </li>
                <li>Your use of the services.</li>
              </ul>
              <h3 className="text-white">17. CHANGES AND TERMINATION</h3>
              <p className="terms_para pb-md-1">
                We may modify the website and these terms at any time, at our
                sole discretion and without notice. You are responsible for
                keeping yourself informed of these terms. Your continued use of
                the website constitutes your acceptance of any changes to these
                terms and any changes will supersede all previous versions of
                the terms. Unless otherwise specified, all changes to these
                terms apply to all users and clients. In addition, we may
                terminate our agreement with you under these terms at any time
                by notifying you in writing (including by email) or without
                notice.
              </p>
              <h3 className="text-white">18. ASSIGNMENT</h3>
              <p className="terms_para pb-md-1">
                This agreement and any rights and licenses granted hereunder,
                may not be transferred or assigned by you, but may be assigned
                by GlorryFX without restriction.
              </p>
              <h3 className="text-white">19. NO PARTNERSHIP</h3>
              <p className="terms_para pb-md-1">
                You agree that no joint venture, partnership, employment, or
                agency relationship exists between you and GlorryFX as a result
                of these terms or your use of the services.
              </p>
              <h3 className="text-white">20. INTEGRATION CLAUSE</h3>
              <p className="terms_para pb-md-1">
                This agreement together with the privacy policy and any other
                legal notices published by GlorryFX, shall constitute the entire
                agreement between you and GlorryFX concerning and governs your
                use of the website and the services.
              </p>
              <h3 className="text-white">21. DISPUTES</h3>
              <p className="terms_para pb-md-1">
                The user agrees that any dispute, claim or controversy arising
                out of or relating to these terms and conditions, or the breach,
                termination, enforcement, interpretation or validity thereof or
                the use of the services, shall be resolved by binding
                arbitration between the user and GlorryFX, provided that each
                party retains the right to bring an individual action in a court
                of competent jurisdiction.
                <span className="mt-2 d-block">
                  In the event of a dispute arising in connection with the use
                  of the services or the breach of these conditions, the parties
                  agree to submit their dispute to arbitration resolution before
                  a reputable arbitration organization as mutually agreed by the
                  parties and in accordance with applicable commercial
                  arbitration rules.
                </span>
                <span className="mt-2 d-block">
                  You agree to initiate a formal dispute proceeding by sending
                  us a communication through our contact information. GlorryFX
                  may choose to send you a written offer after receiving your
                  initial communication. If we offer and send you a settlement
                  offer and you do not accept the offer, or we are unable to
                  resolve your dispute satisfactorily and you wish to continue
                  with the dispute process, you must initiate the dispute
                  resolution process before an accredited arbitration
                  organization and file a separate Demand for Arbitration. Any
                  award rendered by the arbitration tribunal shall be final and
                  conclusive on the parties.
                </span>
                <span className="mt-2 d-block">
                  To the fullest extent permitted by law, you agree that you
                  will not file, join or participate in any class action lawsuit
                  in connection with any claim, dispute or controversy that may
                  arise in connection with your use of the website and services.
                </span>
                <span className="mt-2 d-block">
                  The courts of the United States, specifically the courts
                  located in the State of (Insert State), shall have
                  jurisdiction over any dispute, controversy or claim relating
                  to GlorryFX and its business operations. Any such dispute or
                  controversy shall be brought and resolved in the courts of the
                  United States, specifically the courts located in the State of
                  (Insert State).
                </span>
              </p>
              <h3 className="text-white">22. FINAL PROVISIONS</h3>
              <p className="terms_para pb-md-1">
                These terms and conditions are governed by the laws of the
                United States. Use of the website and services are not
                authorized in any jurisdiction that does not give effect to all
                of the provisions of these terms. Our performance of these terms
                is subject to existing laws and legal process, and nothing
                contained in these terms limits our right to comply with law
                enforcement or other governmental or legal requests or
                requirements relating to your use of our website or information
                provided to or gathered by us with respect to such use.
                <span className="mt-2 d-block">
                  If any part of these terms is found to be invalid, illegal or
                  unenforceable, the validity, legality and enforceability of
                  the remaining provisions will not in any way be affected or
                  impaired. Our failure or delay in enforcing any provision of
                  these terms at any time does not waive our right to enforce
                  the same or any other provision(s) hereof in the future.
                </span>
                <span className="d-block">
                  Any rights not expressly granted herein are reserved.
                </span>
              </p>
              <h3 className="text-white">23. CONTACT INFORMATION</h3>
              <p className="terms_para pb-md-1">
                If you have questions or concerns about these terms, please
                contact us through our contact forms, our chat or by using the
                contact information below:
                <span className="d-block mt-2">GlorryFX</span>
                <span className="d-block mt-2">3710 LONE TREE WAY #368</span>
                <span className="d-block mt-2">ANTIOCH, CA 94509</span>
                <span className="d-block mt-2">UNITED STATES </span>
                <span className="d-block">contact@glorryfx.com</span>
                <span className="d-block">www.glorryfx.com</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TermsCondition;
