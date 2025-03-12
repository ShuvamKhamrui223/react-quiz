import PropTypes from "prop-types";
import { memo } from "react";
import { Link } from "react-router-dom";
const List = memo(
  ({ contentList, fullListLink, limit, detailsPageLink, listHeading }) => {
    return (
      <>
        <div className="">
          <div className="mx-auto flex flex-col max-w-2xl px-4 py-6 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold capitalize tracking-tight text-gray-800 dark:text-white">
                {listHeading}
              </h2>
              {location.pathname === "/" && (
                <Link
                  to={fullListLink}
                  className="first-letter:uppercase text-sm"
                >
                  see all <span className="text-base font-bold">⇒</span>
                </Link>
              )}
            </div>

            {/* <Splide options={{}}> */}
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {contentList &&
                contentList?.map((content) => (
                  // <SplideSlide>
                  <div
                    className="group relative bg-gray-400/15 dark:bg-gray-900 "
                    key={content?.id}
                  >
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        loading="lazy"
                        src={content?.image}
                        alt={content?.name}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div className="flex justify-between">
                      <div className="p-2">
                        <h3 className="text-lg text-gray-700 dark:text-gray-100">
                          <Link to={`${detailsPageLink}/${content?.id}`}>
                            {content?.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {content?.cuisine}
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                          {`Prepare in ${content?.cookTimeMinutes} minutes`}
                        </p>
                      </div>
                    </div>
                  </div>
                  // </SplideSlide>
                ))}
            </div>
            {/* </Splide> */}
          </div>
        </div>
      </>
    );
  },
  []
);
List.propTypes = {
  contentList: PropTypes.array.isRequired,
  listHeading: PropTypes.string,
  limit: PropTypes.number,
  detailsPageLink: PropTypes.string,
};
export default List;
