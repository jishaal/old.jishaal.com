/**
 * Returns an object mapping the URL of each of the site's pages to it's `title`
 * and `meta` objects.
 *
 * This object can be computed at runtime given a `router`, or read from a
 * global `pageDetailsMap` object. This allows for access to the page map during
 * development, while also allowing production builds to use a prebuilt copy.
 */
function getTagsFromSiteMap(siteMap) {
	let routes = Object.values(siteMap.pages);
	return Array.from(
		new Set([].concat.apply([], routes.map(route => (route.meta && route.meta.tags) || [])))
	);
}

export default getTagsFromSiteMap;
