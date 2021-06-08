import { HEADER_HEIGHT } from '@/const'
import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'

const Navigation: React.FC = () => {
  const query = useStaticQuery(graphql`
    query allTags {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  const tags = query.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter.tags
  )
  const removedDuplicatedTag = [...new Set(tags.flat())] as string[]
  removedDuplicatedTag.sort()

  return (
    <div
      className="sticky text-xl font-extrabold"
      style={{ top: `calc(${HEADER_HEIGHT.size} + 20px)` }}
    >
      🐋 모든 태그
      <div className="overflow-y-scroll max-h-96 text-base font-normal pl-6 my-4 space-y-1">
        {removedDuplicatedTag.map(tag => (
          <div key={tag}>
            <span className="text-gray-400 hover:text-white cursor-pointer">
              {tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Navigation
