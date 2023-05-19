

const Blog = () => {
    return (
        <div className="space-y-20 my-10">
            <h2 className="text-5xl text-center font-semibold">Blog Post</h2>
            <div>
                <h3 className="text-2xl font-bold">What is an access token and refresh token?</h3>
                <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.</p>

                <h3 className="text-2xl font-bold"> How do they work and where should we store them on the client-side?</h3>
                <p>In modern authentication and authorization protocols, access tokens and refresh tokens play a vital role in securing access to protected resources. Understanding how they work and implementing proper client-side storage is crucial for maintaining the security of applications. This blog post aims to shed light on the functioning of access tokens and refresh tokens and provide guidance on where to store them on the client-side.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold">Compare SQL and NoSQL databases?</h3>
                <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold">What is express js?</h3>
                <p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p>
                <h3 className="text-2xl font-bold"> What is Nest JS?</h3>
                <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
            </div>
            <div>
                <h3 className="text-2xl font-bold">What is MongoDB aggregate and how does it work</h3>
                <p>MongoDB, a popular NoSQL database, provides a powerful feature called the Aggregation Framework. This framework empowers developers to perform complex data manipulations, transformations, and aggregations directly within the database.</p> <br />
                <p>The MongoDB Aggregation Framework works by processing data through a series of stages within a pipeline. Each stage performs a specific operation on the data and passes the results to the next stage. The final output of the pipeline is the transformed and aggregated data that matches your desired criteria.</p>
            </div>
        </div>
    );
};

export default Blog;