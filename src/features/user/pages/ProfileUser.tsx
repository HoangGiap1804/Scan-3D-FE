import { useState } from 'react';
import PageTitle from '@/components/PageTitle';
import ProfileSidebar from '../components/ProfileSidebar';
import ProfileContent from '../components/ProfileContent';

const ProfileUser = () => {
    const [activeTab, setActiveTab] = useState('dashboard');

    return (
        <div className="h-screen w-full bg-gray-900 dark:bg-blue-500/10 flex flex-col overflow-hidden">
            <div className="flex-shrink-0 pt-4 px-4 lg:px-6 text-white">
                <PageTitle title="Profile" />
            </div>

            <div className="flex-1 flex gap-6 lg:gap-8 p-4 lg:p-6 overflow-hidden">
                <ProfileSidebar activeTab={activeTab} setActiveTab={setActiveTab} />

                <div className="flex-1 bg-white rounded-3xl shadow-sm border border-gray-100 dark:border-dark-outlineVariant/10 overflow-hidden flex flex-col">
                    <div className="flex-1 overflow-y-auto custom-scrollbar p-6 lg:p-8">
                        <ProfileContent activeTab={activeTab} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileUser;
