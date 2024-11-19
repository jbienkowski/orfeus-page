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
		<div className="flex items-center h-16">
			<nav className="flex" aria-label="Breadcrumb">
				{breadcrumbItems.map((item, index) => (
					<li key={index} className="inline-flex">
						{index !== breadcrumbItems.length - 1 ? (
							<>
								<Link href={item.href} className="text-gray-500 hover:text-gray-300">
									{item.label}
								</Link>
								<p className="mx-3">/</p>
							</>
						) : (
							<span className="text-gray-400">{item.label}</span>
						)}
					</li>
				))}
			</nav>
		</div>
	);
};

export default Breadcrumb;
