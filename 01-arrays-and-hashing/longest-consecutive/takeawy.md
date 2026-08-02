# NeetCode 150 — Array & Hashing Notes


The Pattern

I call it:

Find the starting point, then expand.

For every number:

    Look one step BACK
        ↓
    If someone is behind me,
        I'm not the start.
        Skip.

    Otherwise,
        Walk FORWARD until the sequence ends.