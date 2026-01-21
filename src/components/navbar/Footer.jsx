export default function Footer (){
    return (
        <div className="relative bottom-0 w-full bg-white font-inter">
			<section className="flex h-12 p-4 text-zinc-500">
				<p>© 2025 Git Status Tralala. All rights reserved</p>
				<div className="hidden sm:flex sm:gap-4 sm:ml-auto sm:mr-2">
					<span className="hover:cursor-pointer">Terms</span>
					<span className="hover:cursor-pointer">Privacy</span>
				</div>
			</section>
        </div>
    )
}