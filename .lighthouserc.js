module.exports = {
  ci: {
    upload: {
      target: "filesystem",
      outputDir: "./lhci_reports",
      reportFilenamePattern: "%%PATHNAME%%-%%DATETIME%%-report.%%EXTENSION%%",
    },
    assert: {
      assertions: {
        "dom-size": ["error", { maxNumericValue: 3000 }],
        "offscreen-images": "off",
        "color-contrast": "off",
        "tap-targets": "off",
        // performance 카테고리 점수가 90점 미만이면 warning
        "categories:performance": ["warn", { minScore: 0.9 }],
        // accessibility 가 100점 미만이면 error
        "categories:accessibility": ["error", { minScore: 1 }],
      },
    },
  },
};
