import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import * as react_jsx_runtime from 'react/jsx-runtime';

declare const notionButtonVariants: (props?: ({
    variant?: "primary" | "secondary" | "ghost" | "pill" | "outline" | null | undefined;
    size?: "pill" | "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NotionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof notionButtonVariants> {
    isLoading?: boolean;
}
declare const NotionButton: React.ForwardRefExoticComponent<NotionButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const notionCardVariants: (props?: ({
    variant?: "default" | "featured" | "warm" | null | undefined;
    interactive?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NotionCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notionCardVariants> {
}
declare const NotionCard: React.ForwardRefExoticComponent<NotionCardProps & React.RefAttributes<HTMLDivElement>>;
declare const NotionCardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const NotionCardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>>;
declare const NotionCardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>>;
declare const NotionCardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const NotionCardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface NotionInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
}
declare const NotionInput: React.ForwardRefExoticComponent<NotionInputProps & React.RefAttributes<HTMLInputElement>>;

declare const notionBadgeVariants: (props?: ({
    variant?: "outline" | "default" | "success" | "warning" | "destructive" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface NotionBadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof notionBadgeVariants> {
}
declare function NotionBadge({ className, variant, size, ...props }: NotionBadgeProps): react_jsx_runtime.JSX.Element;

interface NavLink {
    label: string;
    href: string;
}
interface NotionNavigationProps extends React.HTMLAttributes<HTMLElement> {
    logo?: React.ReactNode;
    links?: NavLink[];
    ctaLabel?: string;
    onCtaClick?: () => void;
}
declare const NotionNavigation: React.ForwardRefExoticComponent<NotionNavigationProps & React.RefAttributes<HTMLElement>>;

interface NotionFeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
    illustration?: React.ReactNode;
    title: string;
    description: string;
    variant?: 'default' | 'warm';
}
declare const NotionFeatureCard: React.ForwardRefExoticComponent<NotionFeatureCardProps & React.RefAttributes<HTMLDivElement>>;

interface NotionMetricCardProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string | number;
    label?: string;
    description?: string;
}
declare const NotionMetricCard: React.ForwardRefExoticComponent<NotionMetricCardProps & React.RefAttributes<HTMLDivElement>>;

export { type NavLink, NotionBadge, type NotionBadgeProps, NotionButton, type NotionButtonProps, NotionCard, NotionCardContent, NotionCardDescription, NotionCardFooter, NotionCardHeader, type NotionCardProps, NotionCardTitle, NotionFeatureCard, type NotionFeatureCardProps, NotionInput, type NotionInputProps, NotionMetricCard, type NotionMetricCardProps, NotionNavigation, type NotionNavigationProps, notionBadgeVariants, notionButtonVariants, notionCardVariants };
