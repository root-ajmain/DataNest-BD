import { PricingPlan } from '@/lib/pricing';
import { Check, X } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl border-2 p-8 ${
      plan.popular
        ? 'border-primary-500 shadow-xl scale-105'
        : 'border-gray-200'
    }`}>
      {plan.badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-600 px-4 py-1 text-sm font-medium text-white">
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
        <p className="mt-2 text-sm text-gray-600">{plan.description}</p>
      </div>

      <div className="mb-6">
        <div className="flex items-baseline gap-2">
          <span className="text-sm text-gray-600">BDT</span>
          <span className="text-4xl font-bold text-gray-900">
            {plan.price.toLocaleString()}
          </span>
          <span className="text-sm text-gray-600">/month</span>
        </div>
        <div className="mt-2 text-sm text-gray-500">
          + BDT 500 one-time setup
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.included.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
        {plan.features.excluded?.map((feature, index) => (
          <li key={`excluded-${index}`} className="flex items-start gap-2">
            <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-400">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={`/contact?plan=${plan.id}`}
        className={`block w-full rounded-lg py-3 text-center font-medium ${
          plan.popular
            ? 'bg-primary-600 text-white hover:bg-primary-700'
            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}
      >
        Get Started
      </a>
    </div>
  );
}
