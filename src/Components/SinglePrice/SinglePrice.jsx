import PropTypes from "prop-types";
import Features from "../Features/Features";

const SinglePrice = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-slate-800 flex flex-col rounded-md p-4 text-sky-200">
            <h2>
                <span className="text-5xl">{price}</span>
                <span className="text-3xl">/mon</span>
            </h2>
            <h4 className="text-3xl">{name}</h4>
            <div className="flex-grow">
                {
                    features.map((feature, idx) => <Features feature={feature} key={idx}></Features>)
                }
            </div>
            <button className="mt-8 bg-sky-400 text-sky-200 w-full py-4 font-bold rounded-lg hover:bg-sky-800">Buy Now</button>
        </div>
    );
};

SinglePrice.propTypes = {
    option: PropTypes.object
}

export default SinglePrice;