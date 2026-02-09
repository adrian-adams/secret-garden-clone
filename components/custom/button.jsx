import React from 'react'
import Link from 'next/link'

const baseClasses = 'text-base md:text-xl border-2 font-bold text-center px-10 py-3 rounded-[50px] transition';

const variantClasses = {
  primary: 'bg-(--sg-green) border-(--sg-green) text-white hover:bg-transparent hover:text-(--sg-green)',
  secondary: 'bg-transparent border-black text-(--sg-green) hover:bg-(--sg-green) border-(--sg-green) hover:text-white',
};

const fullWidth = {
  no: 'm-auto',
  yes: 'block w-full',
}

export default function Button({ title, link, cta, target, variant = 'primary', width = 'no' }) {
  const appliedVariant = variantClasses[variant] ?? variantClasses.primary;
  const btnWidth = fullWidth[width] ?? fullWidth.no;

  return (
    <Link
      href={`${link}`}
      title={`${title}`}
      {...(target && { target, rel: 'noopener noreferrer' })}
      className={`${baseClasses} ${appliedVariant} ${btnWidth}`}
    >
      <span>{cta}</span>
    </Link>
  )
}
