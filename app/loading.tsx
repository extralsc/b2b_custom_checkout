import React from 'react';

const Skeleton = ({ className = "", ...props }) => {
    return (
        <div
            className={`animate-pulse rounded-md bg-gray-300 ${className}`}
            style={{
                animationDuration: '1s'
            }}
            {...props}
        />
    );
};

export default function SkeletonUIReplica() {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white">
            {/* Top rounded rectangle */}
            <div className="mb-6">
                <Skeleton className="h-6 w-48 rounded-full" />
            </div>

            {/* Large main content area */}
            <div className="mb-8">
                <Skeleton className="h-40 w-full rounded-lg" />
            </div>

            {/* Right side elements */}
            <div className="flex justify-end mb-6">
                <div className="space-y-3">
                    <Skeleton className="h-4 w-64" />
                    <Skeleton className="h-20 w-80" />
                </div>
            </div>

            {/* Bottom section */}
            <div className="space-y-4">
                {/* Long bar */}
                <Skeleton className="h-4 w-full max-w-2xl" />

                {/* Small centered element */}
                <div className="flex justify-center">
                    <Skeleton className="h-6 w-16" />
                </div>

                {/* Medium rectangle centered */}
                <div className="flex justify-center">
                    <Skeleton className="h-12 w-96" />
                </div>

                {/* Bottom long bar */}
                <Skeleton className="h-4 w-full max-w-3xl" />
            </div>
        </div>
    );
}