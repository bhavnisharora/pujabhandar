import { Link } from "react-router-dom";
import PageHeader from "../../components/PageHeader";
import articles from "./Articles";

const Blogs = () => {
  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <PageHeader title="Blogs" elem="Blogs" />
        <br />
        <br />
        <div className="container mx-auto px-4 py-8 cursor-pointer">
          <h1 className="text-3xl font-semibold mb-4">Articles</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, i) => (
              <Link to={`/single-blog/${article.id}`}>
                <div
                  key={article.id}
                  className="bg-white p-6 rounded-lg shadow-md"
                >
                  <h2 className="text-xl font-semibold mb-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    By {article.author} | {article.date}
                  </p>
                  <p className="text-gray-700">{article.content}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
