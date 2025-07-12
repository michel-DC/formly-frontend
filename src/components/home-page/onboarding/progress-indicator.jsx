export default function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="flex justify-center space-x-2 mb-8">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full ${
            index + 1 <= currentStep ? "bg-orange-400" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
