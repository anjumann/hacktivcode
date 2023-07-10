import React from 'react'
import { AiOutlineEnter } from 'react-icons/ai'
import { BsChatRightDots } from 'react-icons/bs'

const Demo = () => {
    return (
        <section className="mt-16 w-full max-w-xl">
            <div className="flex flex-col w-full gap-2">
                <form
                    className="relative flex justify-center items-center"
                // onSubmit={handleSubmit}
                >
                    {/* <img
                        src={linkIcon}
                        alt="link_icon"
                        className="absolute left-0 my-2 ml-3 w-5"
                    /> */}
                    <BsChatRightDots
                        className="absolute left-0 my-2 ml-3 w-5"
                    />


                    <textarea
                        type="url"
                        placeholder="Enter the problem statement here..."
                        // value={article.url}
                        // onChange={(e) => setArticle({ ...article, url: e.target.value })}
                        required
                        className="url_input peer"
                    />
                    <button
                        type="submit"
                        className="submit_btn  peer-focus:border-gray-700 peer-focus:text-gray-700 h-fit py-3 align-middle"
                    >
                        <AiOutlineEnter className="inline " />
                    </button>
                </form>
                {/* Browse URL history */}
                <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
                    {/* {allArticles?.reverse().map((item, index) => (
                        <div
                            key={`link-${index}`}
                            onClick={() => setArticle(item)}
                            className="link_card"
                        >
                            <div className="copy_btn" onClick={() => handleCopy(item.url)}>
                                <img
                                    src={copied === item.url ? tick : copy}
                                    alt={copied === item.url ? "tick_icon" : "copy_icon"}
                                    className="w-[40%] h-[40%] object-contain"
                                />
                            </div>
                            <p className="flex-1 font-satoshi text-blue-700 font-medium text-sm truncate">
                                {item.url}
                            </p>
                        </div>
                    ))} */}
                </div>
            </div>
            {/* Summary */}
            <div className="my-10 max-w-full flex justify-center items-center">
                {/* {isFetching ? (
                    <img src={loader} alt="loader" className="w-20 h-20 object-contain" />
                ) : error ? (
                    <p className="font-inter font-bold text-black text-center">
                        Well, that wasn't supposed to happen...
                        <br />
                        <span className="font-satoshi font-normal text-gray-700">
                            {error?.data?.error}
                        </span>
                    </p>
                ) : (
                    article.summary && (
                        <div className="flex flex-col gap-3">
                            <h2 className="font-satoshi font-bold text-gray-600 text-xl">
                                Article <span className="blue_gradient">Summary</span>
                            </h2>
                            <div className="summary_box">
                                <p className="font-inter font-medium text-sm text-gray-700">
                                    {article.summary}
                                </p>
                            </div>
                        </div>
                    )
                )} */}
            </div>
        </section>
    )
}

export default Demo