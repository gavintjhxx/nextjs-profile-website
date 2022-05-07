import BlogLink from "../blog/blogLink"

export default function ToS() {
    return (
        <blockquote className="border-l-4 border-blogs-borders mb-6 mt-2 pl-8 md:pl-12">
            <ul className="list-decimal text-blogs-texts">
                <li>I reserve the rights to revoke any commissions, make refunds, cancel subscriptions (monthly payments) and make updates to the commission details at my discretion.</li>
                <li>Any changes made to this document, including but not limited to, products/services costs or new products/services will be announced in the Discord Server. You agree to read the updates when announced and reasons including but not limited to, “didn’t read”, will not void any additional charges/fees unless there is a special circumstance.</li>
                <li>Before making any payment, you agree to filling up, preparing or participating in any prerequisites listed below:
                    <ul className="list-disc text-blogs-texts ml-6">
                        <li>My <BlogLink url="https://discord.com/invite/SN9K3eNCzJ" name="Discord Server"/> for Commissions</li>
                        <li><BlogLink url="https://forms.gle/MyKx1T77QTTi4UGJ9" name="Google Forms"/> to confirm your payment/subscription details</li>
                    </ul>
                </li>
                <li>Payment must be made upon confirmation of the details you provided for the product/service you have commissioned me to do. (Unless the payment method used is an hourly charge)</li>
                <li>Should the payment method be an hourly charge, the total sum of the commission fee will be totalled and payment must be made before the code is handed over / deployment.</li>
                <li>By making a payment, you agree that the product or service has been reviewed by you and any changes requested/made after may incur additional charges (which you will be informed before proceeding).</li>
                <li>After making payments/subscriptions, you agree that any further monthly fees/charges or one-time fees will be paid on time as stated in the DM sent by me. Any late payments without informing me and agreed upon together ahead of time will lead to a revoke of all commissions you have liaised with me. Any refunds required will also be made together.</li>
                <li>All products/services purchased and delivered will be watermarked or credited to me, at least once in each component of the product or a credit page/area/space (as specified in each service in the respective pages of this document),</li>
                <li>In the year 2022, you agree that I am given 1 month grace period past the completion date set by you, if any, in view of the National Examinations I am taking this year. </li>
                <li>One-time discounts will be given if the aforementioned grace period is exceeded or any flaws in your product/service are found.</li>
            </ul>
        </blockquote>
    )
}