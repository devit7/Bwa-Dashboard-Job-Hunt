import { Button } from '@/components/ui/button';
import type { FC } from 'react';
import { AiOutlineCalendar, AiOutlineHome, AiOutlineMessage, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsBuildings } from 'react-icons/bs';
import { GoGear } from 'react-icons/go';
import { HiOutlineClipboardDocumentList } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';

interface SidebarProps {}

const Sidebar: FC<SidebarProps> = ({}) => {
        return (
            <div className="pb-12 min-h-screen">
                <div className='space-y-4 py-4'>
                    <div className='px-3 py-2'>
                        <h2 className='mb-2 px-4 text-lg font-semibold'>
                            Dashboard
                        </h2>
                        <div className='space-y-3 text-gray-500'>
                            <Button
                                variant={'ghost'}
                                className='w-full justify-start rounded-none  hover:text-primary'
                            >
                                <AiOutlineHome className='mr-2 text-lg ' />
                                Home
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='w-full justify-start rounded-none  hover:text-primary'
                            >
                                <AiOutlineMessage className='mr-2 text-lg ' />
                                Message
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='w-full justify-start rounded-none  hover:text-primary'
                            >
                                <BsBuildings className='mr-2 text-lg ' />
                                Company Profile
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='w-full justify-start rounded-none  hover:text-primary'
                            >
                                <AiOutlineUsergroupAdd className='mr-2 text-lg ' />
                                All Aplicants
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='w-full justify-start rounded-none  hover:text-primary'
                            >
                                <HiOutlineClipboardDocumentList className='mr-2 text-lg ' />
                                Job Listing
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='w-full justify-start rounded-none  hover:text-primary'
                            >
                                <AiOutlineCalendar className='mr-2 text-lg ' />
                                My Scedule
                            </Button>
                        </div>
                    </div>
                </div>
                <div className='space-y-4 py-4'>
                    <div className='px-3 py-2'>
                        <h2 className='mb-2 px-4 text-lg font-semibold'>
                            Settings
                        </h2>
                        <div className='space-y-3 text-gray-500'>
                            <Button
                                variant={'ghost'}
                                className='w-full justify-start rounded-none  hover:text-primary'
                            >
                                <GoGear className='mr-2 text-lg ' />
                                Settings
                            </Button>
                            <Button
                                variant={'ghost'}
                                className='w-full text-red-500 hover:bg-red-200 hover:text-red-500 justify-start rounded-none '
                            >
                                <IoIosLogOut className='mr-2 text-lg ' />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default Sidebar;