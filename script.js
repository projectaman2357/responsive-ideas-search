
        const searchInput = document.getElementById('ideaSearch');
        const ideas = document.querySelectorAll('.idea');

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();
            ideas.forEach(idea => {
                const ideaText = idea.textContent.toLowerCase();
                if (ideaText.includes(searchTerm)) {
                    idea.style.display = 'block';
                } else {
                    idea.style.display = 'none';
                }
            });
        });

