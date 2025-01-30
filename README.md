## Getting Started

### a) Using the source code
1. Clone the repository
2. Run ```npm install --legacy-peer-deps``` (due to react-query not accepting react@^19.0.0)
3. Run ```npm run dev```
4. Open [http://localhost:3000](http://localhost:3000) in your browser to see to project

### b) Using the deployed application
1. Navigate over to [link]().

## Thoughts and notes
1. Not using the [pokeapi wrapper library](https://github.com/Gabb-c/pokenode-ts) intentionally, as it kind of defeats the purpose of this assessment in my opinion.
2. Using react-query for care-free api calls management.
3. Using TailwindCSS for easy component styling.
4. Implemented infinite scrolling for a pleasurable user experience.
5. When calling the pokeapi, I refrained from using the limit query as 20 is the default anyway.