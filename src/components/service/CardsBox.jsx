import React from 'react';

export const CardBox = ({ blog }) => {
	return (
		<div className='h-full w-[400px] m-2 flex-shrink-0 cursor-pointer'>
			<div className='rounded-3xl overflow-hidden mb-4 relative h-[250px]'>
				{/* <
				 src={`/src/assets/images/${blog.id}.jpg`} alt={blog.title} /> */}
			</div>
			<div className='px-4 flex gap-4'>
				<div className='flex flex-col gap-2 w-full'>
					<h3 className='text-lg font-bold text-slate-700 leading-7 whitespace-normal'>
						{blog.title}
					</h3>
					<div className='flex gap-4'>
						<p className='text-sm text-slate-800 font-semibold'>
							{blog.description}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};