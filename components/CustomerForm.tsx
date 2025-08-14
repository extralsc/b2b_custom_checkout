import { CustomerInfo } from '../types/checkout';

interface CustomerFormProps {
    customerInfo: CustomerInfo;
    onInputChange: (field: keyof CustomerInfo, value: string) => void;
    onCancel: () => void;
    onSubmit: () => void;
}

export const CustomerForm = ({ customerInfo, onInputChange, onCancel, onSubmit }: CustomerFormProps) => {
    return (
        <div className="mb-8">
            <p className="text-gray-600 mb-6">Adressen ska vara i Sverige.</p>

            <div className="space-y-4">
                {/* Input fields */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">Mejladress</label>
                    <input
                        type="email"
                        value={customerInfo.email}
                        onChange={(e) => onInputChange('email', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                </div>
                {/* ...existing input fields... */}
                <div className="flex gap-4">
                    <button
                        onClick={onCancel}
                        className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50 text-gray-700"
                    >
                        Avbryt
                    </button>
                    <button
                        onClick={onSubmit}
                        className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800"
                    >
                        Fortsätt
                    </button>
                </div>
            </div>
        </div>
    );
};
