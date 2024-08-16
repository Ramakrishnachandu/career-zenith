// components/FileUpload.tsx
import React, { useState } from "react";
import SvgDelete from "../SVG/SvgDelete";
import SvgAttachment from "../SVG/SvgAttachment";

interface FileUploadProps {
    onFileUpload?: (file: File) => void; // Callback when file is uploaded
    onFileDelete?: () => void; // Callback when file is deleted
}
interface FileDetails {
    size: number; // Size in bytes
    lastUpdated: Date; // Last updated date
}

const FileUpload: React.FC<FileUploadProps> = ({
    onFileUpload,
    onFileDelete,
}) => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [fileDetails, setFileDetails] = useState<FileDetails | null>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFile(file);
            onFileUpload?.(file)
            const sizeInKB = (file.size / 1024).toFixed(2); // Convert bytes to KB
            const lastUpdated = new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
            });
            setFileDetails({
                size: Number(sizeInKB),
                lastUpdated: new Date(lastUpdated),
            });
        }
    };

    const handleUpload = () => {
        if (!file) {
            setError("Please select a file first.");
            return;
        }

        setUploading(true);
        setError(null);
        setSuccess(null);

        // Simulate file upload process
        setTimeout(() => {
            setUploading(false);
            setSuccess("File uploaded successfully!");
            onFileUpload?.(file); // Notify parent about the uploaded file
        }, 6000);
    };

    const handleDelete = () => {
        setFile(null);
        setSuccess(null);
        setError(null);
        onFileDelete?.(); // Notify parent about the file deletion
    };

    return (
        <div>
            {uploading && <p>Uploading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            {file ? (
                <div className="flex flex-col gap-2">
                    <div className="flex gap-2 items-center justify-start  w-full">
                        <div className="flex border border-slate-300 max-w-80 w-fit rounded-3xl items-center gap-2 py-1 px-2">
                            <SvgAttachment />
                            <p
                                className="text-blue-600 m-0 font-semibold overflow-hidden text-ellipsis whitespace-nowrap"
                                title={file.name}
                            >
                                {file.name}
                            </p>
                        </div>
                        <button onClick={handleDelete}>
                            <SvgDelete />
                        </button>
                    </div>
                    <p className=" text-sm text-slate-500">
                        Size: {fileDetails?.size} KB | Last Updated: {fileDetails?.lastUpdated.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </p>
                </div>
            ) : (
                <div className="flex items-center gap-2 pr-2 w-fit border border-slate-300 rounded-3xl">
                    <button
                        className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-3xl"
                        type="button"
                        onClick={() => document.getElementById("file-input")?.click()}
                    >
                        {"Upload Resume"}
                    </button>
                    <p className="flex text-slate-400 text-sm">
                        {"DOC, DOCx, PDF, RTF | Max: 2 MB"}
                    </p>
                    <input
                        id="file-input"
                        type="file"
                        accept=".doc,.docx,.pdf,.rtf"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                </div>
            )}
        </div>
    );
};

export default FileUpload;
