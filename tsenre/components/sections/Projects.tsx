"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, PlayCircle } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const categories = useMemo(() => {
    const unique = Array.from(new Set(PROJECTS.map((p) => p.category)));
    return ["All", ...unique];
  }, []);

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [mediaIndex, setMediaIndex] = useState(0);

  const filteredProjects = useMemo(
    () => (activeCategory === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory)),
    [activeCategory]
  );

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setActiveIndex(null); // close lightbox if open — filtered set is changing
  };

  const openProject = (i: number) => {
    setActiveIndex(i);
    setMediaIndex(0);
  };
  const close = () => setActiveIndex(null);
  const prevProject = () => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + filteredProjects.length) % filteredProjects.length));
    setMediaIndex(0);
  };
  const nextProject = () => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % filteredProjects.length));
    setMediaIndex(0);
  };

  const activeProject = activeIndex !== null ? filteredProjects[activeIndex] : null;
  const activeMedia = activeProject ? activeProject.media[mediaIndex] : null;

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <SectionHeading
          eyebrow="Our Projects"
          title="Fieldwork Across Nigeria's Industrial Landscape"
          description="A selection of engineering, inspection, calibration and lifting operations delivered for clients across the energy and industrial sectors."
          align="center"
        />

        {/* Category filter tabs */}
        <div className="mt-10 -mx-6 px-6 lg:mx-0 lg:px-0 overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2.5 w-max lg:w-full lg:flex-wrap lg:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => selectCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-ocean-500 border-ocean-500 text-white shadow-sm"
                    : "bg-white border-ink/10 text-ink-soft hover:border-ocean-500/40 hover:text-ocean-500"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => {
              const cover = project.media[0];
              const coverSrc = cover.type === "video" ? cover.poster ?? cover.src : cover.src;
              const hasVideo = project.media.some((m) => m.type === "video");

              return (
                <motion.button
                  key={project.slug}
                  layout
                  onClick={() => openProject(i)}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: (i % 3) * 0.05 }}
                  className={`group relative w-full block overflow-hidden rounded-xl2 shadow-card break-inside-avoid mb-5 ${
                    i % 3 === 0 ? "h-[420px]" : i % 3 === 1 ? "h-[300px]" : "h-[360px]"
                  }`}
                >
                  <Image
                    src={coverSrc}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-900/85 via-ocean-900/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                    <span className="coord-label text-accent-300 mb-1">{project.category}</span>
                    <h3 className="text-white font-heading font-semibold text-lg leading-snug">{project.title}</h3>
                    {project.media.length > 1 && (
                      <span className="mt-1 text-xs text-white/60">{project.media.length} media</span>
                    )}
                  </div>
                  {hasVideo && (
                    <div className="absolute top-4 left-4 h-9 w-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center">
                      <PlayCircle className="h-5 w-5 text-white" />
                    </div>
                  )}
                  <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/15 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ZoomIn className="h-4 w-4 text-white" />
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredProjects.length === 0 && (
          <p className="text-center text-ink-soft mt-16">No projects found in this category yet.</p>
        )}
      </div>

      <AnimatePresence>
        {activeProject && activeMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[150] flex items-center justify-center bg-ocean-900/95 backdrop-blur-md px-4 py-10"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close lightbox"
              className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevProject();
              }}
              aria-label="Previous project"
              className="absolute left-4 sm:left-8 h-11 w-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextProject();
              }}
              aria-label="Next project"
              className="absolute right-4 sm:right-8 h-11 w-11 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors z-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center gap-4 max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
              <motion.div
                key={`${activeIndex}-${mediaIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full aspect-[4/3] rounded-xl2 overflow-hidden bg-black"
              >
                {activeMedia.type === "video" ? (
                  <video
                    src={activeMedia.src}
                    poster={activeMedia.poster}
                    controls
                    className="absolute inset-0 h-full w-full object-contain bg-black"
                  />
                ) : (
                  <Image src={activeMedia.src} alt={activeProject.title} fill className="object-contain" />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ocean-900/90 to-transparent p-6 pointer-events-none">
                  <span className="coord-label text-accent-300">{activeProject.category}</span>
                  <h3 className="text-white font-heading font-semibold text-xl mt-1">{activeProject.title}</h3>
                </div>
              </motion.div>

              {activeProject.media.length > 1 && (
                <div className="flex items-center gap-2 flex-wrap justify-center">
                  {activeProject.media.map((m, mi) => (
                    <button
                      key={mi}
                      onClick={() => setMediaIndex(mi)}
                      aria-label={`View media ${mi + 1}`}
                      className={`relative h-14 w-14 rounded-lg overflow-hidden border-2 transition-colors ${
                        mi === mediaIndex ? "border-accent-400" : "border-white/20 hover:border-white/50"
                      }`}
                    >
                      <Image
                        src={m.type === "video" ? m.poster ?? m.src : m.src}
                        alt=""
                        fill
                        className="object-cover"
                      />
                      {m.type === "video" && (
                        <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <PlayCircle className="h-4 w-4 text-white" />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
