#!/usr/bin/env python3
"""Duck type and iteration"""

from typing import Iterable, Sequence, List, Union, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Parameters:
        lst: Sequence of list

    Return:
        List of tuple of sequence of integers
    """

    return [(i, len(i)) for i in lst]


lista = ['hola', 'mundo', 'de la', 'AI']
print(element_length(lista))
# Output: [('hola', 4), ('mundo', 5), ('de la', 5), ('AI', 2)]
