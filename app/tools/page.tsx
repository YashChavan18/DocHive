'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Search, ArrowRight, Sparkles, Clock, Zap, TrendingUp,
  Layers, ChevronRight, LayoutGrid, Star, Plus, Mail,
  GraduationCap, Briefcase, Landmark, Share2, Globe, User,
  Code, Image, FileText, Hash, Link, Package, X, ChevronUp,
} from 'lucide-react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ToolCard } from '@/components/tools/tool-card';
import { CategoryCard } from '@/components/tools/category-card';
import { FilterChip } from '@/components/tools/filter-chip';
import { cn } from '@/lib/utils';
import {
  tools, popularSearches, filterCategories, categoryInfo,
  categoryIcons, categoryGradients, categoryBgGradients,
  searchTools, getToolsByCategory,
} from '@/lib/tool-data';
import type { Tool } from '@/lib/tool-data';

const trendingTools = ['Invoice Generator', 'Resume Builder', 'QR Generator', 'GST Calculator', 'Password Generator', 'Loan Calculator', 'Merge PDF', 'Offer Letter', 'Salary Slip', 'Business Card'];

const sidebarItems = [
  { label: 'Categories', icon: LayoutGrid },
  { label: 'Popular', icon: Star },
  { label: 'Newest', icon: Sparkles },
  { label: 'Coming Soon', icon: Clock },
];

const recentlyAdded = tools.filter(t => t.isNew && t.status === 'Ready').slice(0, 4);
const comingSoonTools = tools.filter(t => t.status === 'Coming Soon');
const readyTools = tools.filter(t => t.status === 'Ready');

const categoryIconsMap: Record<string, typeof LayoutGrid> = {
  'Categories': LayoutGrid,
  'Popular': Star,
  'Newest': Sparkles,
  'Coming Soon': Clock,
};

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [scrolled, setScrolled] = useState(false);
  const [sidebarActive, setSidebarActive] = useState('Categories');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTools = useMemo(() => {
    let result = tools;
    if (activeFilter !== 'All') {
      result = getToolsByCategory(activeFilter);
    }
    if (searchQuery.trim()) {
      result = searchTools(searchQuery);
      if (activeFilter !== 'All') {
        result = result.filter(t => t.category === activeFilter || (activeFilter === 'PDF' && t.category === 'PDF') || (activeFilter === 'Social' && t.category === 'Social') || (activeFilter === 'Image' && t.category === 'Image'));
      }
    }
    return result;
  }, [searchQuery, activeFilter]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setSidebarActive(id === 'tools-grid' ? 'Categories' : id === 'popular-searches' ? 'Popular' : id === 'recently-added' ? 'Newest' : id === 'coming-soon' ? 'Coming Soon' : 'Categories');
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white dark:from-blue-950/30 dark:via-gray-900 dark:to-gray-900" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/20 dark:bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-100 dark:border-blue-900/50 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {tools.filter(t => t.status === 'Ready').length}+ Free Tools Available
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600">
                Browse Free Online Tools
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
              Find the perfect tool for students, professionals, businesses and everyday productivity.
            </p>

            {/* Large Search Box */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-white dark:bg-gray-800/80 rounded-2xl shadow-xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-200 dark:border-gray-700 p-2 backdrop-blur-sm hover:shadow-2xl transition-shadow duration-300">
                <div className="flex items-center gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search tools..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-12 pr-4 h-14 text-lg border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-gray-400 dark:placeholder:text-gray-500 text-gray-900 dark:text-white outline-none"
                    />
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                  <button className="h-12 px-6 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg shadow-blue-500/25 rounded-xl hover:scale-[1.02] transition-transform duration-200 font-medium text-sm flex items-center gap-2">
                    <Search className="w-4 h-4" />
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Search Examples */}
            <div className="mt-6">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Example:
              </p>
              <div className="flex flex-wrap items-center gap-2 justify-center">
                {['Invoice Generator', 'Resume Builder', 'GST Calculator', 'QR Generator', 'Password Generator'].map((search, index) => (
                  <motion.button
                    key={search}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSearchQuery(search)}
                    className="px-4 py-2 rounded-full text-sm font-medium text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 transition-all duration-200"
                  >
                    {searchQuery === search ? <span className="flex items-center gap-1"><Search className="w-3 h-3" />{search}</span> : search}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-40 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide pb-1">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-gray-500 dark:text-gray-400 flex-shrink-0" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 flex-shrink-0">Filter:</span>
            </div>
            {filterCategories.map((cat) => (
              <FilterChip
                key={cat}
                label={cat}
                isActive={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                isComingSoon={cat === 'Developer' || cat === 'Image'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-56 flex-shrink-0">
            <div className="sticky top-36">
              <div className="p-4 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 shadow-sm">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 px-3">Navigate</h3>
                <nav className="space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.label}
                        onClick={() => scrollToSection(
                          item.label === 'Categories' ? 'featured-categories' :
                          item.label === 'Popular' ? 'popular-searches' :
                          item.label === 'Newest' ? 'recently-added' :
                          item.label === 'Coming Soon' ? 'coming-soon' : 'tools-grid'
                        )}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                          sidebarActive === item.label
                            ? "bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400"
                            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                        {item.label}
                        <ChevronRight className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Stats Card */}
              <div className="mt-4 p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border border-blue-100 dark:border-blue-900/50">
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{readyTools.length}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Ready</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">{comingSoonTools.length}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Soon</div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            {(searchQuery || activeFilter !== 'All') && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8 flex items-center justify-between"
              >
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {searchQuery ? `Results for "${searchQuery}"` : `${activeFilter} Tools`}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} found
                  </p>
                </div>
                <button
                  onClick={() => { setSearchQuery(''); setActiveFilter('All'); }}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Clear
                </button>
              </motion.div>
            )}

            {/* Tools Grid */}
            <section id="tools-grid" className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/25">
                    <LayoutGrid className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">All Tools</h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Explore our complete collection</p>
                  </div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
                  {filteredTools.length} tools
                </span>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredTools.map((tool, index) => (
                  <ToolCard key={tool.id} tool={tool} index={index} />
                ))}
              </div>

              {filteredTools.length === 0 && (
                <div className="text-center py-20">
                  <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No tools found</h3>
                  <p className="text-gray-500 dark:text-gray-400">Try adjusting your search or filter</p>
                </div>
              )}
            </section>

            {/* Featured Categories */}
            <section id="featured-categories" className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <Layers className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Featured Categories</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Browse tools by category</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryInfo.map((cat, index) => (
                  <CategoryCard
                    key={cat.title}
                    title={cat.title}
                    description={cat.description}
                    count={cat.count}
                    comingSoon={cat.comingSoon}
                    index={index}
                  />
                ))}
              </div>
            </section>

            {/* Popular Searches */}
            <section id="popular-searches" className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Trending Searches</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">What people are looking for right now</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {trendingTools.map((tool, index) => (
                  <motion.button
                    key={tool}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSearchQuery(tool)}
                    className="px-5 py-2.5 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-blue-400 border border-gray-200 dark:border-gray-700 transition-all duration-200 flex items-center gap-2"
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-500" />
                    {tool}
                  </motion.button>
                ))}
              </div>
            </section>

            {/* Recently Added */}
            <section id="recently-added" className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center shadow-lg shadow-pink-500/25">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Recently Added</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fresh tools just added to the collection</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentlyAdded.map((tool, index) => (
                  <ToolCard key={tool.id} tool={tool} index={index} />
                ))}
              </div>
            </section>

            {/* Coming Soon */}
            <section id="coming-soon" className="mb-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-slate-500 to-gray-500 flex items-center justify-center shadow-lg shadow-slate-500/25">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Coming Soon</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Exciting tools in the pipeline</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {comingSoonTools.map((tool, index) => (
                  <ToolCard key={tool.id} tool={tool} index={index} />
                ))}
              </div>
            </section>

            {/* Footer CTA */}
            <section className="mb-8">
              <div className="relative p-12 rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/20 border border-blue-100 dark:border-blue-900/50 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 dark:bg-cyan-500/5 rounded-full blur-3xl" />

                <div className="relative text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                    <Plus className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Can&apos;t find your tool?
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto">
                    We&apos;re constantly adding new tools. Let us know what you need and we&apos;ll build it for you.
                  </p>
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] transition-all duration-300">
                    <Mail className="w-5 h-5" />
                    Request a Tool
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
