

const Blog = () => {
    return (
        <div>
            <div>
                <h3 className="text-2xl font-bold">What is an access token and refresh token?</h3>
                <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>
                <h3> How do they work and where should we store them on the client-side?</h3>
            </div>
        </div>
    );
};

export default Blog;