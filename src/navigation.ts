import {
  createLocalizedPathnamesNavigation,
  Pathnames
} from 'next-intl/navigation';
 
export const locales = ['en', 'tu'] as const;
export const localePrefix = 'as-needed'; // Default
 
// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  '/': '/',
  '/contact': '/contact',
  '/tours':'/tours',
  '/team':'/team'
} satisfies Pathnames<typeof locales>;
 
export const {Link, redirect, usePathname, useRouter, getPathname} =
  createLocalizedPathnamesNavigation({locales, localePrefix, pathnames});