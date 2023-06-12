export function Sidebar() {
	return (
		<>
			<div className={'hidden sm:flex h-screen w-screen absolute text-white font-clash z-50 pointer-events-none'}>
				<div className={'absolute inset-0'}>
					<div className={'absolute w-[8%] md:w-[10%] 2xl:w-[6%] border-r border-white h-screen backdrop-blur-2xl flex flex-col'}>
						<div className={'h-5/6 flex flex-col justify-center items-center border-b relative'}>
							<div className={'-rotate-90 uppercase text-center font-semibold 2xl:font-medium 2xl:text-3xl'}>
								<div> &quot;The Portfolio&quot; </div>
								<div> justincrediblemoments </div>
							</div>
						</div>
						<div className={'h-1/6 flex flex-col justify-center items-center'}>
							<img className={'w-[10vw] h-[10vw] rounded-full object-cover'} src={'/assets/img/logo.png'} alt={'logo'}/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}