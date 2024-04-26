const x = `
&.big {
    padding: 0;

    & > .featured-subcontainer > .featured-subcontainer-item[data-index="1"]:hover {
        border-radius: var(--border-radius) 0 0 var(--border-radius);
    }

    & > .featured-subcontainer > .featured-subcontainer-item[data-index="4"]:hover {
        border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }

    & > .featured-subcontainer > .featured-subcontainer-item {
        transition: 0.1s ease-out;
    }
    & > .featured-subcontainer > .featured-subcontainer-item:hover {
        background-color: var(--Success);
        min-height: 105px;
    }

    & > .featured-subcontainer > .featured-subcontainer-item:hover > .feature > div > * {
        color: var(--White);
    }

    & > .featured-subcontainer > .featured-subcontainer-item > .feature {
        flex-direction: column;
        flex-wrap: nowrap;
        min-height: 221px;
        padding: 2.5rem 2rem;
    }

    & > .featured-subcontainer > .featured-subcontainer-item > .feature > div > .icon-subcontainer {
        padding: 0.7rem;
        background-color: var(--White);
        border-radius: 50px;
        box-shadow: 0 0 2px 1px rgba(51, 51, 51, 0.1), 0 0 12px 10px rgba(51, 51, 51, 0.02);
            
        & > * {
            color: var(--Success);
            width: 1.8rem;
            height: 1.8rem;
        }
    }

    & > .featured-subcontainer > .featured-subcontainer-item > .feature > div {
        width: 100%;
        justify-content: flex-start;
        align-items: flex-start;
    }

    & > .featured-subcontainer > .featured-subcontainer-item > .line-featured {
        height: 221px;
        padding: 0;
        padding: 0.5px;
    }

}
`