'use client';

export default function Loading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-2 border-primary-green border-t-transparent rounded-full animate-spin"></div> 
            </div>
        </div>
    );
}