import clsx from 'clsx';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface CardProps {
    children: ReactNode;
    className?: string;
    href?: string;
    hover?: boolean;
}

export default function Card({ children, className, href, hover = true }: CardProps) {
    const cardClasses = clsx(
        'bg-white rounded-xl overflow-hidden',
        hover && 'transition-all duration-300 hover:shadow-xl hover:-translate-y-1',
        'shadow-md border border-secondary-100',
        className
    );

    const content = (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cardClasses}
        >
            {children}
        </motion.div>
    );

    if (href) {
        return <Link href={href}>{content}</Link>;
    }

    return content;
}

interface CardImageProps {
    src: string;
    alt: string;
    className?: string;
}

export function CardImage({ src, alt, className }: CardImageProps) {
    return (
        <div className={clsx('relative overflow-hidden', className)}>
            <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
        </div>
    );
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
    return (
        <div className={clsx('p-6', className)}>
            {children}
        </div>
    );
}

interface CardTitleProps {
    children: ReactNode;
    className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
    return (
        <h3 className={clsx('text-lg font-semibold text-primary-900 mb-2', className)}>
            {children}
        </h3>
    );
}

interface CardDescriptionProps {
    children: ReactNode;
    className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
    return (
        <p className={clsx('text-secondary-600 text-sm leading-relaxed', className)}>
            {children}
        </p>
    );
}
