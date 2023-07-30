import React from "react";
import { Link } from "react-router-dom";

const Paginator = function ({ meta }) {
    const decodeHtml = function (html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    };

    const transformLinks = function (links) {
        return links.map((link) => {
            const url = link.url ? `?page=${link.url.split("=")[1]}` : null;

            return {
                url: url,
                label: link.label,
                active: link.active,
            };
        });
    };

    return (
        <div className="pagination">
            {transformLinks(meta.links).map((link, i) => (
                <Link
                    to={`${link.url}`}
                    key={i}
                    className={link.active ? "active" : ""}
                    style={
                        !link.url
                            ? { pointerEvents: "none", opacity: "50%" }
                            : {}
                    }
                >
                    {decodeHtml(link.label)}
                </Link>
            ))}
        </div>
    );
};

export default Paginator;
