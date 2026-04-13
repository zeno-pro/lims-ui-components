import * as React from 'react';
import { LucideIcon } from 'lucide-react';

interface AppShellProps extends React.HTMLAttributes<HTMLDivElement> {
    sidebar?: React.ReactNode;
    setupBanner?: React.ReactNode;
}
declare const AppShell: React.ForwardRefExoticComponent<AppShellProps & React.RefAttributes<HTMLDivElement>>;

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    actions?: React.ReactNode;
}
declare const PageHeader: React.ForwardRefExoticComponent<PageHeaderProps & React.RefAttributes<HTMLDivElement>>;

interface CollapsibleColumnProps extends React.HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    side?: 'left' | 'right';
    defaultWidth?: number;
}
declare const CollapsibleColumn: React.ForwardRefExoticComponent<CollapsibleColumnProps & React.RefAttributes<HTMLDivElement>>;

interface SidebarNavItem {
    name: string;
    href: string;
    icon: LucideIcon;
    onClick?: () => void;
}
interface SidebarNavGroup {
    title: string;
    items: SidebarNavItem[];
}
interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
    navigation: SidebarNavGroup[];
    collapsed?: boolean;
    activeHref?: string;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;

interface ListPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    searchPlaceholder?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    isLoading?: boolean;
    isEmpty?: boolean;
    emptyIcon?: React.ReactNode;
    emptyTitle?: string;
    emptyDescription?: string;
    onCreate?: () => void;
    headerActions?: React.ReactNode;
    onRefresh?: () => void;
    gridClassName?: string;
}
declare const ListPageLayout: React.ForwardRefExoticComponent<ListPageLayoutProps & React.RefAttributes<HTMLDivElement>>;

interface DetailPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    headerActions?: React.ReactNode;
    leftColumn?: React.ReactNode;
    rightColumn?: React.ReactNode;
    leftColumnOpen?: boolean;
    onLeftColumnOpenChange?: (open: boolean) => void;
    rightColumnOpen?: boolean;
    onRightColumnOpenChange?: (open: boolean) => void;
    leftColumnWidth?: number;
    rightColumnWidth?: number;
}
declare const DetailPageLayout: React.ForwardRefExoticComponent<DetailPageLayoutProps & React.RefAttributes<HTMLDivElement>>;

interface SettingsPageLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    onSave?: () => void;
    onCancel?: () => void;
    isSaving?: boolean;
    maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}
declare const SettingsPageLayout: React.ForwardRefExoticComponent<SettingsPageLayoutProps & React.RefAttributes<HTMLDivElement>>;

interface FormSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
}
declare const FormSection: React.ForwardRefExoticComponent<FormSectionProps & React.RefAttributes<HTMLDivElement>>;

interface WizardStep {
    title: string;
    description?: string;
}
interface WizardLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
    steps: WizardStep[];
    currentStep: number;
    onStepChange?: (step: number) => void;
    onBack?: () => void;
    onNext?: () => void;
    onFinish?: () => void;
    isNextDisabled?: boolean;
    isBackDisabled?: boolean;
    isFinishDisabled?: boolean;
    isFinishing?: boolean;
}
declare const WizardLayout: React.ForwardRefExoticComponent<WizardLayoutProps & React.RefAttributes<HTMLDivElement>>;

export { AppShell, type AppShellProps, CollapsibleColumn, type CollapsibleColumnProps, DetailPageLayout, type DetailPageLayoutProps, FormSection, type FormSectionProps, ListPageLayout, type ListPageLayoutProps, PageHeader, type PageHeaderProps, SettingsPageLayout, type SettingsPageLayoutProps, Sidebar, type SidebarNavGroup, type SidebarNavItem, type SidebarProps, WizardLayout, type WizardLayoutProps, type WizardStep };
