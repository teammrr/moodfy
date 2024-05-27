import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_KEY, {
    apiVersion: '2022-11-15',
});
// WASP_WEB_CLIENT_URL will be set up by Wasp when deploying to production: https://wasp-lang.dev/docs/deploying
const DOMAIN = process.env.WASP_WEB_CLIENT_URL || 'http://localhost:3000';
export async function fetchStripeCustomer(customerEmail) {
    let customer;
    try {
        const stripeCustomers = await stripe.customers.list({
            email: customerEmail,
        });
        if (!stripeCustomers.data.length) {
            console.log('creating customer');
            customer = await stripe.customers.create({
                email: customerEmail,
            });
        }
        else {
            console.log('using existing customer');
            customer = stripeCustomers.data[0];
        }
        return customer;
    }
    catch (error) {
        console.error(error.message);
        throw error;
    }
}
export async function createStripeCheckoutSession({ priceId, customerId, mode, }) {
    try {
        return await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: priceId,
                    quantity: 1,
                },
            ],
            mode: mode,
            success_url: `${DOMAIN}/checkout?success=true`,
            cancel_url: `${DOMAIN}/checkout?canceled=true`,
            automatic_tax: { enabled: true },
            customer_update: {
                address: 'auto',
            },
            customer: customerId,
        });
    }
    catch (error) {
        console.error(error.message);
        throw error;
    }
}
//# sourceMappingURL=stripeUtils.js.map