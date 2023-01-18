import { SyntheticEvent, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function List({ URLlist }: any) {
  const handleCopy = (event: string) => {
    navigator.clipboard.writeText(event);
    toast.success("Copied");
  };
  return (
    <>
      <ToastContainer autoClose={600}/>
      <ul className="list">
        {URLlist.map((url: any, index: number) => (
          <div key={index}>
            {url?.error ? (
              <li>{url.error}</li>
            ) : (
              <>
                <li>{url?.oldUrl}</li>
                <div className="resultDiv">
                  <li>{url?.newUrl.short_link}</li>
                  <button
                    onClick={() => {
                      handleCopy(url?.newUrl.short_link);
                    }}
                  >
                    Copy
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </ul>
    </>
  );
}

export default List;
