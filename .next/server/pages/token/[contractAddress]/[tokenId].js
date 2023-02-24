(() => {
var exports = {};
exports.id = 276;
exports.ids = [276];
exports.modules = {

/***/ 3608:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Token_container__9s0fK",
	"metadataContainer": "Token_metadataContainer__jhcGy",
	"listingContainer": "Token_listingContainer__IhZxS",
	"image": "Token_image__H7h2C",
	"input": "Token_input__Odktg",
	"contractMetadataContainer": "Token_contractMetadataContainer__juKmG",
	"imageContainer": "Token_imageContainer__iA8Sc",
	"crossButton": "Token_crossButton__kWnxP",
	"collectionImage": "Token_collectionImage__niZfe",
	"collectionName": "Token_collectionName__cFhKs",
	"title": "Token_title__jJT0a",
	"nftOwnerContainer": "Token_nftOwnerContainer__02bxs",
	"nftOwnerImage": "Token_nftOwnerImage__vD_nJ",
	"nftOwnerInfo": "Token_nftOwnerInfo__fGJDv",
	"label": "Token_label__9Ed7k",
	"nftOwnerAddress": "Token_nftOwnerAddress__3IWOZ",
	"descriptionContainer": "Token_descriptionContainer__nhPLd",
	"descriptionTitle": "Token_descriptionTitle__C0j5Z",
	"traitsContainer": "Token_traitsContainer__tFYqd",
	"traitContainer": "Token_traitContainer___o8Rp",
	"eventsContainer": "Token_eventsContainer__T_8WP",
	"traitValue": "Token_traitValue__YKY3f",
	"traitName": "Token_traitName__2FHmj",
	"eventContainer": "Token_eventContainer__ubrC_",
	"txHashArrow": "Token_txHashArrow__IHgy1",
	"pricingContainer": "Token_pricingContainer__WZR87",
	"pricingInfo": "Token_pricingInfo__aZRmu",
	"pricingValue": "Token_pricingValue__5ZXWr",
	"buyButton": "Token_buyButton__AqcrL",
	"listingTimeContainer": "Token_listingTimeContainer__KYs3v",
	"listingTime": "Token_listingTime__TdHHY",
	"or": "Token_or__N9F8M"
};


/***/ }),

/***/ 5930:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TokenPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2352);
/* harmony import */ var _thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5993);
/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8578);
/* harmony import */ var _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5644);
/* harmony import */ var _styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3608);
/* harmony import */ var _styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _util_randomColor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3470);
/* harmony import */ var _components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6725);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6201);
/* harmony import */ var _util_toastConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4017);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_8__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const [randomColor1, randomColor2] = [
    (0,_util_randomColor__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(),
    (0,_util_randomColor__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)()
];
function TokenPage({ nft , contractMetadata  }) {
    const [bidValue, setBidValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    // Connect to marketplace smart contract
    const { contract: marketplace , isLoading: loadingContract  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(_const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .MARKETPLACE_ADDRESS */ .YJ, "marketplace-v3");
    // Connect to NFT Collection smart contract
    const { contract: nftCollection  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContract)(_const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ADDRESS */ .ZT, _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ABI */ .qv);
    const { data: directListing , isLoading: loadingDirect  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useValidDirectListings)(marketplace, {
        tokenContract: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ADDRESS */ .ZT,
        tokenId: nft.metadata.id
    });
    // 2. Load if the NFT is for auction
    const { data: auctionListing , isLoading: loadingAuction  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useValidEnglishAuctions)(marketplace, {
        tokenContract: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ADDRESS */ .ZT,
        tokenId: nft.metadata.id
    });
    // Load historical transfer events: TODO - more event types like sale
    const { data: transferEvents , isLoading: loadingTransferEvents  } = (0,_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.useContractEvents)(nftCollection, "Transfer", {
        queryFilter: {
            filters: {
                tokenId: nft.metadata.id
            },
            order: "desc"
        }
    });
    async function createBidOrOffer() {
        let txResult;
        if (!bidValue) {
            (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"])(`Please enter a bid value`, {
                icon: "❌",
                style: _util_toastConfig__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                position: "bottom-center"
            });
            return;
        }
        if (auctionListing?.[0]) {
            txResult = await marketplace?.englishAuctions.makeBid(auctionListing[0].id, bidValue);
        } else if (directListing?.[0]) {
            txResult = await marketplace?.offers.makeOffer({
                assetContractAddress: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ADDRESS */ .ZT,
                tokenId: nft.metadata.id,
                totalPrice: bidValue
            });
        }
        return txResult;
    }
    async function buyListing() {
        let txResult;
        if (auctionListing?.[0]) {
            txResult = await marketplace?.englishAuctions.buyoutAuction(auctionListing[0].id);
        } else if (directListing?.[0]) {
            txResult = await marketplace?.directListings.buyFromListing(directListing[0].id, 1);
        }
        return txResult;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hot_toast__WEBPACK_IMPORTED_MODULE_8__.Toaster, {
                position: "bottom-center",
                reverseOrder: false
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container_Container__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                maxWidth: "lg",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().metadataContainer),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.ThirdwebNftMedia, {
                                    metadata: nft.metadata,
                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().image)
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().descriptionContainer),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().descriptionTitle),
                                            children: "Description"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),
                                            children: nft.metadata.description
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().descriptionTitle),
                                            children: "Traits"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitsContainer),
                                            children: Object.entries(nft?.metadata?.attributes || {}).map(([key, value])=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitContainer),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitName),
                                                            children: key
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitValue),
                                                            children: value?.toString() || ""
                                                        })
                                                    ]
                                                }, key))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().descriptionTitle),
                                            children: "History"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitsContainer),
                                            children: transferEvents?.map((event, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().eventsContainer),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().eventContainer),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitName),
                                                                    children: "Event"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitValue),
                                                                    children: // if last event in array, then it's a mint
                                                                    index === transferEvents.length - 1 ? "Mint" : "Transfer"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().eventContainer),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitName),
                                                                    children: "From"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitValue),
                                                                    children: [
                                                                        event.data.from?.slice(0, 4),
                                                                        "...",
                                                                        event.data.from?.slice(-2)
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().eventContainer),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitName),
                                                                    children: "To"
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().traitValue),
                                                                    children: [
                                                                        event.data.to?.slice(0, 4),
                                                                        "...",
                                                                        event.data.to?.slice(-2)
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().eventContainer),
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                                className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().txHashArrow),
                                                                href: `${_const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .ETHERSCAN_URL */ .t0}/tx/${event.transaction.transactionHash}`,
                                                                target: "_blank",
                                                                children: "↗"
                                                            })
                                                        })
                                                    ]
                                                }, event.transaction.transactionHash))
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().listingContainer),
                            children: [
                                contractMetadata && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().contractMetadataContainer),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.MediaRenderer, {
                                            src: contractMetadata.image,
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().collectionImage)
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().collectionName),
                                            children: contractMetadata.name
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
                                    children: nft.metadata.name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().collectionName),
                                    children: [
                                        "Token ID #",
                                        nft.metadata.id
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                    href: `/profile/${nft.owner}`,
                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().nftOwnerContainer),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().nftOwnerImage),
                                            style: {
                                                background: `linear-gradient(90deg, ${randomColor1}, ${randomColor2})`
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().nftOwnerInfo),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().label),
                                                    children: "Current Owner"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().nftOwnerAddress),
                                                    children: [
                                                        nft.owner.slice(0, 8),
                                                        "...",
                                                        nft.owner.slice(-4)
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().pricingContainer),
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().pricingInfo),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().label),
                                                children: "Price"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().pricingValue),
                                                children: loadingContract || loadingDirect || loadingAuction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    width: "120",
                                                    height: "24"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: directListing && directListing[0] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            directListing[0]?.currencyValuePerToken.displayValue,
                                                            " " + directListing[0]?.currencyValuePerToken.symbol
                                                        ]
                                                    }) : auctionListing && auctionListing[0] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            auctionListing[0]?.buyoutCurrencyValue.displayValue,
                                                            " " + auctionListing[0]?.buyoutCurrencyValue.symbol
                                                        ]
                                                    }) : "Not for sale"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: loadingAuction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                    width: "120",
                                                    height: "24"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: auctionListing && auctionListing[0] && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().label),
                                                                style: {
                                                                    marginTop: 12
                                                                },
                                                                children: "Bids starting from"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().pricingValue),
                                                                children: [
                                                                    auctionListing[0]?.minimumBidCurrencyValue.displayValue,
                                                                    " " + auctionListing[0]?.minimumBidCurrencyValue.symbol
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                }),
                                loadingContract || loadingDirect || loadingAuction ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Skeleton_Skeleton__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                    width: "100%",
                                    height: "164"
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {
                                            contractAddress: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .MARKETPLACE_ADDRESS */ .YJ,
                                            action: async ()=>await buyListing(),
                                            onSuccess: ()=>{
                                                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"])(`Purchase success!`, {
                                                    icon: "✅",
                                                    style: _util_toastConfig__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                    position: "bottom-center"
                                                });
                                            },
                                            onError: (e)=>{
                                                console.error("hey");
                                                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"])(`Purchase failed! Reason: ${e.message}`, {
                                                    icon: "❌",
                                                    style: _util_toastConfig__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                    position: "bottom-center"
                                                });
                                            },
                                            children: "Buy at asking price"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().listingTimeContainer)} ${(_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().or)}`,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().listingTime),
                                                children: "or"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: (_styles_Token_module_css__WEBPACK_IMPORTED_MODULE_11___default().input),
                                            defaultValue: auctionListing?.[0]?.minimumBidCurrencyValue?.displayValue || 0,
                                            type: "number",
                                            step: 0.000001,
                                            onChange: (e)=>{
                                                setBidValue(e.target.value);
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_thirdweb_dev_react__WEBPACK_IMPORTED_MODULE_1__.Web3Button, {
                                            contractAddress: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .MARKETPLACE_ADDRESS */ .YJ,
                                            action: async ()=>await createBidOrOffer(),
                                            onSuccess: ()=>{
                                                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"])(`Bid success!`, {
                                                    icon: "✅",
                                                    style: _util_toastConfig__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                    position: "bottom-center"
                                                });
                                            },
                                            onError: (e)=>{
                                                (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_8__["default"])(`Bid failed! Reason: ${e.message}`, {
                                                    icon: "❌",
                                                    style: _util_toastConfig__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,
                                                    position: "bottom-center"
                                                });
                                            },
                                            children: "Place bid"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
const getStaticProps = async (context)=>{
    const tokenId = context.params?.tokenId;
    const sdk = new _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_4__.ThirdwebSDK(_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_4__.CHAIN_ID_TO_NAME[_const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_ID */ .er]);
    const contract = await sdk.getContractFromAbi(_const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ADDRESS */ .ZT, _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ABI */ .qv);
    const nft = await contract.erc1155.get(tokenId);
    let contractMetadata;
    try {
        contractMetadata = await contract.metadata.get();
    } catch (e) {}
    return {
        props: {
            nft,
            contractMetadata: contractMetadata || null
        }
    };
};
const getStaticPaths = async ()=>{
    const sdk = new _thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_4__.ThirdwebSDK(_thirdweb_dev_sdk__WEBPACK_IMPORTED_MODULE_4__.CHAIN_ID_TO_NAME[_const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_ID */ .er]);
    const contract = await sdk.getContractFromAbi(_const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ADDRESS */ .ZT, _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ABI */ .qv);
    // TODO: Pagination?
    const nfts = await contract.erc1155.getAll();
    const paths = nfts.map((nft)=>{
        return {
            params: {
                contractAddress: _const_contractAddresses__WEBPACK_IMPORTED_MODULE_5__/* .EDITION_DROP_ADDRESS */ .ZT,
                tokenId: nft.metadata.id
            }
        };
    });
    return {
        paths,
        fallback: "blocking"
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const toastStyle = {
    borderRadius: "4px",
    background: "#222528",
    color: "#fff"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toastStyle);


/***/ }),

/***/ 2352:
/***/ ((module) => {

"use strict";
module.exports = require("@thirdweb-dev/react");

/***/ }),

/***/ 8578:
/***/ ((module) => {

"use strict";
module.exports = require("@thirdweb-dev/sdk");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6201:
/***/ ((module) => {

"use strict";
module.exports = import("react-hot-toast");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,63,644,945], () => (__webpack_exec__(5930)));
module.exports = __webpack_exports__;

})();