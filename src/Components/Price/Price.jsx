import SinglePrice from "../SinglePrice/SinglePrice";

const Price = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Free",
            "price": 0.00,
            "features": [
                "Access to limited features",
                "1GB storage",
                "Community support",
                "Basic reports",
                "Single user account"
            ]
        },
        {
            "id": 2,
            "name": "Basic",
            "price": 9.99,
            "features": [
                "Access to core features",
                "10GB storage",
                "Email support",
                "Standard reports",
                "Up to 3 user accounts"
            ]
        },
        {
            "id": 3,
            "name": "Standard",
            "price": 29.99,
            "features": [
                "Access to all core features",
                "50GB storage",
                "Priority email support",
                "Detailed analytics",
                "Customizable dashboard",
                "Up to 10 user accounts",
                "Monthly performance reports"
            ]
        },
        {
            "id": 4,
            "name": "Pro",
            "price": 59.99,
            "features": [
                "Access to all advanced features",
                "100GB storage",
                "Phone & email support",
                "Advanced analytics",
                "Personalized dashboard",
                "Up to 25 user accounts",
                "Bi-weekly performance reports",
                "Access to integrations"
            ]
        },
        {
            "id": 5,
            "name": "Premium",
            "price": 99.99,
            "features": [
                "Access to all features",
                "500GB storage",
                "24/7 phone & email support",
                "Real-time analytics",
                "Fully customizable dashboard",
                "Up to 50 user accounts",
                "Weekly performance reports",
                "API access",
                "Dedicated account manager"
            ]
        },
        {
            "id": 6,
            "name": "Enterprise",
            "price": 199.99,
            "features": [
                "Unlimited access to all features",
                "Unlimited storage",
                "24/7 priority support",
                "Custom analytics solutions",
                "Advanced security options",
                "Unlimited user accounts",
                "Daily performance reports",
                "API access",
                "Dedicated account manager",
                "Onboarding & training"
            ]
        },
        {
            "id": 7,
            "name": "Custom",
            "price": "Contact Us",
            "features": [
                "Customizable feature set",
                "Custom storage options",
                "Dedicated team for support",
                "Tailored analytics",
                "Scalable user accounts",
                "Custom reporting frequency",
                "Advanced API integrations",
                "Account setup assistance",
                "Flexible billing & pricing",
                "Comprehensive security options"
            ]
        }
    ]



    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Price In this CITY</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    priceOptions.map((option) => <SinglePrice key={option.id} option={option}></SinglePrice>)
                }
            </div>
        </div>
    );
};

export default Price;