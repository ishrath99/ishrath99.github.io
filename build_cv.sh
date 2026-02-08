#!/bin/bash
set -e

# Navigate to the repository root (assuming script is run from root)
# If script is in root, we go to cv directory
cd "$(dirname "$0")/cv"

echo "Building CV..."
# Run pdflatex. Interaction nonstopmode prevents hanging on errors.
pdflatex -interaction=nonstopmode "0 main.tex" > /dev/null

# Run again to ensure references/layout are correct
pdflatex -interaction=nonstopmode "0 main.tex" > /dev/null

echo "Moving PDF to assets..."
# The output file will be "0 main.pdf" because the input is "0 main.tex"
mv "0 main.pdf" ../assets/ishrath_CV.pdf

echo "Cleaning up artifacts..."
rm -f *.aux *.log *.out *.toc "0 main.synctex.gz"

echo "Success! CV updated at assets/ishrath_CV.pdf"
