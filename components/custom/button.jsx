// import React from 'react'
import Link from 'next/link'

const baseClasses = 'inline-block text-base md:text-xl border-2 font-bold text-center px-12 py-4 rounded-[50px] transition';

const variantClasses = {
  primary: 'bg-(--sg-green) border-(--sg-green) text-white hover:bg-transparent hover:text-(--sg-green)',
  secondary: 'bg-transparent border-black text-(--sg-green) hover:bg-(--sg-green) border-(--sg-green) hover:text-white',
};

export default function Button({ title, link, cta, target, variant = 'primary' }) {
  const appliedVariant = variantClasses[variant] ?? variantClasses.primary;

  return (
    <Link
      href={`${link}`}
      title={`${title}`}
      {...(target && { target, rel: 'noopener noreferrer' })}
      className={`${baseClasses} ${appliedVariant}`}
    >
      <span>{cta}</span>
    </Link>
  )
}
