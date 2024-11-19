// components/Breadcrumb.js
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Breadcrumb = () => {
	const router = useRouter();
	const pathSegments = router.asPath.split("/").filter((segment) => segment);

	const breadcrumbItems = pathSegments.map((segment, index) => {
		const href = "/" + pathSegments.slice(0, index + 1).join("/");
		const label = segment.charAt(0).toUpperCase() + segment.slice(1);
		return { href, label };
	});

	// Add the home breadcrumb
	breadcrumbItems.unshift({ href: "/", label: "Home" });

	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex items-center justify-between h-16">
				<nav className="flex" aria-label="Breadcrumb">
					<ol className="inline-flex items-center space-x-1 md:space-x-3">
						{breadcrumbItems.map((item, index) => (
							<li key={index} className="inline-flex items-center">
								{index !== breadcrumbItems.length - 1 ? (
									<>
										<Link
											href={item.href}
											className="text-gray-500 hover:text-gray-300 inline-flex items-center"
										>
											{item.icon && <item.icon className="mr-2 w-4 h-4" />}
											{item.label}
										</Link>
										<svg
											className="w-6 h-6 text-gray-400 mx-2"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
												clipRule="evenodd"
											/>
										</svg>
									</>
								) : (
									<span className="text-gray-400">{item.label}</span>
								)}
							</li>
						))}
					</ol>
				</nav>
			</div>
		</div>
	);
};

export default Breadcrumb;
