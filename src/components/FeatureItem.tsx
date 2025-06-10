interface FeatureItemProps {
    icon: string | React.ReactNode;
    title: string;
    description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description }) => {
    return (
        <div className="feature-item py-6 text-center px-4 bg-white rounded-lg shadow-md">
            <div className="text-4xl text-primary-600 mb-4">
                {typeof icon === "string" ? <i className={icon}></i> : icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};
export default FeatureItem;