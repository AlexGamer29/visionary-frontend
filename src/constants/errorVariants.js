const errorStyles = {
  fontSize: '0.875rem',
  color: '#EF4444',
  fontWeight: 500,
}

const errorVariants = {
  hidden: { opacity: 0, y: -5 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.645, 0.045, 0.355, 1] },
  },
}

export { errorStyles, errorVariants }
